import Quill from 'quill';

export function replaceIcons(customIcons: { [key: string]: any }): void {
  const icons = Quill.import('ui/icons');
  icons.undo = '';
  icons.redo = '';
  icons.customImage = '';
  for (const key in icons) {
    // eslint-disable-next-line no-prototype-builtins
    if (customIcons.hasOwnProperty(key)) {
      icons[key] = customIcons[key];
    }
  }
}

export function styleColorPickerDropdown() {
  const elementToAppendTo = document.querySelectorAll('.ql-picker-item[data-value="transparent"]');
  elementToAppendTo.forEach((element) => {
    const redLineSpan = document.createElement('span');
    redLineSpan.classList.add('red-line');
    element.appendChild(redLineSpan);
  });
}
