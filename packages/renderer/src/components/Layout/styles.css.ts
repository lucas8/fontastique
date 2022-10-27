import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/styles';
import { TOPBAR_HEIGHT } from '../Topbar';

export const container = style([
  sprinkles({
    px: 3,
    display: 'flex',
    gap: 4,
  }),
  style({
    marginTop: `${TOPBAR_HEIGHT}px`,
    height: '100vh',
  }),
]);
