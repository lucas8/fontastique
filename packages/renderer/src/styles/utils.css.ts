import { style } from '@vanilla-extract/css';

export const draggable = style({
  ['-webkit-app-region' as any]: 'drag',
  ['-webkit-user-select' as any]: 'none',
});
