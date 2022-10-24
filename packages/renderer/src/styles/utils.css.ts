import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const reset = style({
  // Prevent padding and border from affecting element width
  boxSizing: 'border-box',

  // Remove margin and padding in all browsers
  margin: 0,
  padding: 0,

  // Allow adding border to element by just adding borderWidth
  borderColor: vars.colors.accent,
  borderStyle: 'solid',
  borderWidth: 0,

  color: vars.colors.current,
  fontSize: '100%',
  fontFamily: vars.fonts.body,
  verticalAlign: 'baseline',
  selectors: {
    '[data-js-focus-visible] &:focus:not([data-focus-visible-added])': {
      outline: 'none',
    },
  },
});

export const draggable = style({
  ['-webkit-app-region' as any]: 'drag',
  ['-webkit-user-select' as any]: 'none',
});
