import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/styles';
import { TOPBAR_HEIGHT } from '../Topbar';

export const container = style([
  sprinkles({
    px: 3,
  }),
  style({
    marginTop: `${TOPBAR_HEIGHT}px`,
  }),
]);
