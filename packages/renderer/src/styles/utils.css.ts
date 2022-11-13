import { style } from '@vanilla-extract/css';

export const draggable = style({
  ['-webkit-app-region' as any]: 'drag',
  ['-webkit-user-select' as any]: 'none',
});

export const noScrollBars = style({
  selectors: {
    '[data-js-focus-visible] &:focus:not([data-focus-visible-added])': {
      outline: 'none',
    },
    // hide scroll bars
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
