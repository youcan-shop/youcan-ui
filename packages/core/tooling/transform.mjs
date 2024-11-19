import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync, truncateSync, writeFileSync } from 'fs';
import { ensureFileSync } from 'fs-extra';
import input from './tokens.json' with { type: 'json' };

const OUTPUT_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'tokens.css');

const FONT_WEIGHTS = {
  'Thin': 100,
  'Extra Light': 200,
  'Light': 300,
  'Regular': 400,
  'Medium': 500,
  'Semi Bold': 600,
  'SemiBold': 600,
  'Bold': 700,
  'Black': 800,
};

const TRANSFORMERS = {
  color: (prefix, { value }) => {
    return `--${prefix}: ${value.toUpperCase()};`;
  },
  boxShadow: (prefix, { value }) => {
    const spread = v => `${v.x}px ${v.y}px ${v.blur}px ${v.spread}px ${v.color}`;

    if (Array.isArray(value)) {
      return `--${prefix}: ${value.map(spread).join(', ')};`;
    }

    return `--${prefix}: ${spread(value)};`;
  },
  fonts: (prefix, { value }) => {
    return `--${prefix}: ${value};`;
  },
  typography: (prefix, { value }, set) => {
    const {
      fontWeight,
      fontSize,
      lineHeight,
    } = substituteValue(set, value);

    const ratio = lineHeight === 'AUTO'
      ? `${fontSize}px`
      : `${fontSize}px/${lineHeight}`;

    return `--${prefix}: ${FONT_WEIGHTS[fontWeight]} ${ratio} var(--font-family);`;
  },
};

function isUnit(token) {
  return typeof token === 'object' && 'value' in token && token.value != null;
}

function substituteValue(set, value) {
  return Object
    .fromEntries(
      Object
        .entries(value)
        .map(([k, v]) => {
          const matches = v.match(/{+(.*?)}/);

          if (!matches) {
            return [k, v];
          }

          try {
            const substitution = matches[1]
              .split('.')
              .reduce((x, y) => x[y], set);

            return [k, substitution.value];
          }
          catch (err) {
            return [k, v];
          }
        }),
    );
}

function prefix(path) {
  return path
    .join('-')
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(p => p.toLowerCase())
    .join('-');
}

function transform(path, unit, set) {
  const transformer = TRANSFORMERS[unit.type];
  if (typeof unit.type === 'undefined') {
    let output = '';

    Object.entries(unit).forEach(([unitId, unit]) => {
      output += `${transform([...path, unitId], unit, set)}\n`;
    });

    return output;
  }

  if (transformer == null) {
    return null;
  }

  return transformer(prefix(path), unit, set);
}

let output = `
html[dir="rtl"]{
  --font-family: "DroidKufi", "Mona-sans", Arial, sans-serif;
}
:root {`;

function write(line) {
  if (line) {
    return output += `\n${line}`;
  }
}

Object.values(input).forEach((set) => {
  Object.entries(set).forEach(([tokenId, token]) => {
    if (isUnit(token)) {
      write(transform([tokenId], token, set));
    }
    else {
      Object
        .entries(token)
        .forEach(([unitId, unit]) => {
          write(transform([tokenId, unitId], unit, set));
        });
    }
  });
});

output += '\n}';

ensureFileSync(OUTPUT_PATH);

if (existsSync(OUTPUT_PATH)) {
  truncateSync(OUTPUT_PATH);
}

writeFileSync(OUTPUT_PATH, output, { flag: 'w', encoding: 'utf-8' });
