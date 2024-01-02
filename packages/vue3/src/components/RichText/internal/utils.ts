export const setDropdownPosition = (dropdownTrigger: HTMLElement, dropdown: HTMLElement, position: string) => {
  if (dropdownTrigger && dropdown) {
    dropdownTrigger?.classList.remove('dropdown-trigger-hide');
    const offset = dropdown?.getBoundingClientRect();
    const triggerHeight = dropdownTrigger?.clientHeight || 0;
    const triggerWidth = dropdownTrigger?.clientWidth || 0;
    const dropdownHeight = dropdown?.clientHeight || 0;
    const dropdownWidth = dropdown?.clientWidth || 0;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const gap = 6;
    const disableHorizontal = triggerWidth + dropdownWidth + gap > windowWidth;
    if (offset) {
    // set position top as default
      let centerDropdown = (triggerWidth - dropdownWidth) / 2;
      let top = offset.top - (triggerHeight + gap);
      let left = offset.left - centerDropdown;

      left = left < 0 ? gap / 2 : left + triggerWidth > windowWidth ? windowWidth - (triggerWidth + gap / 2) : left;

      const bottom = offset.bottom + triggerHeight + gap;
      const right = offset.right + triggerWidth + gap;

      if ((position === 'left' || position === 'right') && !disableHorizontal) {
        centerDropdown = (triggerHeight - dropdownHeight) / 2;
        top = offset.top - centerDropdown;
        top = top < 0 ? gap / 2 : top + triggerHeight > windowHeight ? windowHeight - (triggerHeight + gap / 2) : top;
        left = offset.left - (triggerWidth + gap);

        if ((position === 'right' || left < 0) && right < windowWidth) {
          left = offset.left + (dropdownWidth + gap);
        }
      }
      else if ((position === 'bottom' || top < 0) && bottom < windowHeight) {
        top = offset.top + (dropdownHeight + gap);
      }

      dropdownTrigger?.setAttribute('style', `top:${top}px;left:${left}px`);
    }
  }
};
