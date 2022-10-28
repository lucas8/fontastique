import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/styles';
import { TOPBAR_HEIGHT } from '../Topbar';

export const container = style([
  sprinkles({
    px: 3,
    gap: 4,
  }),
  style({
    display: 'grid',
    gridTemplateColumns: 'minmax(200px, 40%) 1fr',
    gridTemplateRows: '1fr',
    marginTop: `${TOPBAR_HEIGHT}px`,
    height: '100vh',
  }),
]);
