import { promises as fs } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';
import {
  cleanupSVG,
  deOptimisePaths,
  importDirectory,
  runSVGO,
} from '@iconify/tools';
import { ensureFile } from 'fs-extra';
import info from '../info.json' with { type: 'json' };

(async () => {
  const source = 'source';
  const prefix = info.prefix || 'youcan';

  const target = resolve(dirname(fileURLToPath(import.meta.url)), '../icons.json');

  // Load icon set
  const iconSet = await importDirectory(source, {
    prefix,
  });

  // Parse all icons
  await iconSet.forEach(async (name, type) => {
    if (type !== 'icon') {
      // Do not parse aliases
      return;
    }

    // Get SVG instance for icon
    const svg = iconSet.toSVG(name);

    // Clean up and validate icon
    // This will throw an exception if icon is invalid
    await cleanupSVG(svg);

    // Optimise
    await runSVGO(svg);

    // Update paths for compatibility with old software
    await deOptimisePaths(svg);

    // SVG instance is detached from icon set, so changes to
    // icon are not stored in icon set automatically.

    // Update icon in icon set
    iconSet.fromSVG(name, svg);
  });

  // Save icon set
  const iconSetContent = iconSet.export(true);

  await ensureFile(target);
  await fs.writeFile(
    target,
    JSON.stringify(iconSetContent, null, '\t'),
    'utf8',
  );

  const count
    = Object.keys(iconSet.entries).length
    + (iconSet.aliases ? Object.keys(iconSet.aliases).length : 0);

  stdout.write(`Found ${count} icons`);

  info.total = count;
  info.height = iconSetContent.height || 20;

  await fs.writeFile(
    resolve(dirname(fileURLToPath(import.meta.url)), '../info.json'),
    JSON.stringify(info, null, 2),
    'utf8',
  );
})();
