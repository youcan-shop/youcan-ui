<template>
  <div class="tooltip">
    <span class="label">
      <slot />
    </span>
  </div>
</template>

<style scoped lang="scss">
.tooltip {
  position: absolute;
  z-index: 3;
  right: 7px;
  bottom: calc(100% + 14px);
  padding: 5px 11px;
  transform: translateX(50%) scale(0);
  transform-origin: center bottom;
  transition: opacity 150ms linear, transform 150ms linear;
  border: 0.5px solid var(--gray-200);
  border-radius: 4px;
  opacity: 0;
  background-color: var(--base-white);
  box-shadow: var(--shadow-sm-gray);

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: -8px;
    left: 50%;
    width: 8px;
    height: 8px;
    transform: rotate(45deg) translateX(-50%);
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-radius: 1px;
    border-color: var(--gray-200);
    background-color: var(--base-white);
  }

  .label {
    position: relative;
    z-index: 2;
    color: var(--gray-900);
    font: var(--text-xs-medium);
  }
}
</style>
