import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/styles';

export const container = style([
  sprinkles({
    display: 'grid',
    height: 'viewHeight',
  }),
  style({
    gridTemplateColumns: 'minmax(300px, 40%) 1fr',
    gridTemplateRows: '1fr',
  }),
]);
