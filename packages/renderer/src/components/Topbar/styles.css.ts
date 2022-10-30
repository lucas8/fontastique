import { keyframes, style } from '@vanilla-extract/css';
import { sprinkles, vars } from '~/styles';

export const TOPBAR_HEIGHT = 33;

const animateUp = keyframes({
  '0%': { opacity: '0', transform: 'translateY(-10px)' },
  '100%': { opacity: '1', transform: 'none' },
});

const textAnimateInLeft = keyframes({
  '0%': { opacity: '0', transform: 'translateX(-5px)' },
  '100%': { opacity: 1, transform: 'none' },
});

export const container = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `${TOPBAR_HEIGHT}px`,
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  backgroundColor: vars.colors.background,
});

export const title = style([
  sprinkles({
    fontWeight: 'bold',
    mr: 1,
  }),
  style({
    fontFamily: 'PP Woodland',
    animation: `420ms ease 0ms 1 normal backwards running ${animateUp}`,
  }),
]);

export const fontName = style([
  sprinkles({
    fontFamily: 'body',
    fontWeight: 'normal',
  }),
  style({
    animation: `200ms ease 0ms 1 normal backwards running ${textAnimateInLeft}`,
  }),
]);

export const fontItem = style({
  position: 'absolute',
  marginLeft: '4px',
  width: '100%',
});

export const divider = style({ opacity: 0.5 });
