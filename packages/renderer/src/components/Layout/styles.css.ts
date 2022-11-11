import { style } from '@vanilla-extract/css';
import { sprinkles } from '~/styles';

export const container = style([
  sprinkles({
    paddingX: '3',
    gap: '4',
    display: 'grid',
    height: 'viewHeight',
  }),
  style({
    gridTemplateColumns: 'minmax(200px, 40%) 1fr',
    gridTemplateRows: '1fr',
  }),
]);
