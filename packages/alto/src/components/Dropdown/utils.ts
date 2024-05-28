function getElementIndex(elements: HTMLCollection) {
  let index = -1;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains('focus')) {
      index = i;
    }
    elements[i].classList.remove('focus');
  }

  return index;
}

export function elementChildrenNavigate(element: HTMLElement, target: string, navigateTo: 'next' | 'previous' = 'next') {
  if (element) {
    const elements = element.getElementsByClassName(target);
    if (elements.length) {
      const find = getElementIndex(elements);
      let index = 0;

      if (navigateTo === 'next' && find > -1 && find < elements.length - 1) {
        index = find + 1;
      }
      if (navigateTo === 'previous') {
        index = find > 0 ? find - 1 : elements.length - 1;
      }

      elements[index].classList.add('focus');

      return elements[index];
    }
  }

  return null;
}
