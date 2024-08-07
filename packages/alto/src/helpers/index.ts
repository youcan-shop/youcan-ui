import type { ToastOptions } from '../types/index';
import { dateFormat, generateDisplayedDays, getDateDaysAgo, getMonthName, getWeekdayNames, isMoreThan, isSameDate, moveToMonth, setDateTime } from './date';

const toast = {
  show: (toastOptions: ToastOptions) => {
    const data = { id: 'show-toast', options: toastOptions };
    window.postMessage(data);
  },
};

function setPosition(triggeredElement: HTMLElement, trigger: HTMLElement, position: string, gap = 6, center = true, isRtl = false) {
  const xy = { top: 0, left: 0, currentPosition: position };
  if (triggeredElement && trigger) {
    const offset = trigger?.getBoundingClientRect();
    const triggeredElementHeight = triggeredElement?.clientHeight || 0;
    const triggeredElementWidth = triggeredElement?.clientWidth || 0;
    const triggerHeight = trigger?.clientHeight || 0;
    const triggerWidth = trigger?.clientWidth || 0;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const disableHorizontal = triggeredElementWidth + triggerWidth + gap > windowWidth;
    if (offset) {
    // set position top as default
      let centerTooltip = center ? (triggeredElementWidth - triggerWidth) / 2 : 0;
      let top = offset.top - (triggeredElementHeight + gap);
      let left = offset.left - centerTooltip;
      if (isRtl && !center) {
        left = offset.right - offset.width;
      }

      left = left < 0 ? gap / 2 : left + triggeredElementWidth > windowWidth ? windowWidth - (triggeredElementWidth + gap / 2) : left;

      const bottom = offset.bottom + triggeredElementHeight + gap;
      const right = offset.right + triggeredElementWidth + gap;
      xy.currentPosition = 'top';

      if ((position === 'left' || position === 'right') && !disableHorizontal) {
        centerTooltip = (triggeredElementHeight - triggerHeight) / 2;
        top = offset.top - centerTooltip;
        top = top < 0 ? gap / 2 : top + triggeredElementHeight > windowHeight ? windowHeight - (triggeredElementHeight + gap / 2) : top;
        left = offset.left - (triggeredElementWidth + gap);
        xy.currentPosition = 'left';
        if ((position === 'right' || left < 0) && right < windowWidth) {
          left = offset.left + (triggerWidth + gap);
          xy.currentPosition = 'right';
        }
      }
      else if ((position === 'bottom' || top < 0) && bottom < windowHeight) {
        top = offset.top + (triggerHeight + gap);
        xy.currentPosition = 'bottom';
      }

      xy.top = top;
      xy.left = left;

      return xy;
    }

    return xy;
  }

  return xy;
}

function isRTL(): boolean {
  return document.dir === 'rtl';
}

export {
  toast,
  setPosition,
  getWeekdayNames,
  getMonthName,
  generateDisplayedDays,
  moveToMonth,
  isSameDate,
  dateFormat,
  isMoreThan,
  getDateDaysAgo,
  setDateTime,
  isRTL,
};
