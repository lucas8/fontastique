import { style } from '@vanilla-extract/css';
import { sprinkles, vars } from '~/styles';

export const TOPBAR_HEIGHT = 33;

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

export const title = sprinkles({
  fontWeight: 'bold',
  mr: 1,
});
