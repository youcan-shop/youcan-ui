export const setPosition = (tooltipTrigger: HTMLElement, tooltip: HTMLElement, position: string, gap = 6) => {
  const xy = { top: 0, left: 0, currentPosition: position };
  if (tooltipTrigger && tooltip) {
    const offset = tooltip?.getBoundingClientRect();
    const triggerHeight = tooltipTrigger?.clientHeight || 0;
    const triggerWidth = tooltipTrigger?.clientWidth || 0;
    const tooltipHeight = tooltip?.clientHeight || 0;
    const tooltipWidth = tooltip?.clientWidth || 0;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const disableHorizontal = triggerWidth + tooltipWidth + gap > windowWidth;
    if (offset) {
    // set position top as default
      let centerTooltip = (triggerWidth - tooltipWidth) / 2;
      let top = offset.top - (triggerHeight + gap);
      let left = offset.left - centerTooltip;

      left = left < 0 ? gap / 2 : left + triggerWidth > windowWidth ? windowWidth - (triggerWidth + gap / 2) : left;

      const bottom = offset.bottom + triggerHeight + gap;
      const right = offset.right + triggerWidth + gap;
      xy.currentPosition = 'top';

      if ((position === 'left' || position === 'right') && !disableHorizontal) {
        centerTooltip = (triggerHeight - tooltipHeight) / 2;
        top = offset.top - centerTooltip;
        top = top < 0 ? gap / 2 : top + triggerHeight > windowHeight ? windowHeight - (triggerHeight + gap / 2) : top;
        left = offset.left - (triggerWidth + gap);
        xy.currentPosition = 'left';
        if ((position === 'right' || left < 0) && right < windowWidth) {
          left = offset.left + (tooltipWidth + gap);
          xy.currentPosition = 'right';
        }
      }
      else if ((position === 'bottom' || top < 0) && bottom < windowHeight) {
        top = offset.top + (tooltipHeight + gap);
        xy.currentPosition = 'bottom';
      }
      xy.top = top;
      xy.left = left;

      return xy;
    }

    return xy;
  }

  return xy;
};
