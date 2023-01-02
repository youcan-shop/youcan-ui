import { promises as fs } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import {
  cleanupSVG,
  deOptimisePaths,
  importDirectory,
  isEmptyColor,
  parseColors,
  runSVGO,
} from '@iconify/tools';
import { ensureFile } from 'fs-extra';
import info from '../info.json' assert { type: 'json' };

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
    await parseColors(svg, {
      defaultColor: 'currentColor',
      callback: (attr, colorStr, color) => {
        if (!color) {
          // Color cannot be parsed!
          throw new Error(`Invalid color: "${colorStr}" in attribute ${attr}`);
        }

        if (isEmptyColor(color)) {
          // Color is empty: 'none' or 'transparent'. Return as is
          return color;
        }

        return 'currentColor';
      },
    });

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
  console.log(`Found ${count} icons`);

  info.total = count;
  info.height = iconSetContent.height || 20;

  await fs.writeFile(
    resolve(dirname(fileURLToPath(import.meta.url)), '../info.json'),
    JSON.stringify(info, null, 2),
    'utf8',
  );
})();
