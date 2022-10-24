import { style } from '@vanilla-extract/css';
import { reset, sprinkles } from '~/styles';

export const container = style([
  reset,
  sprinkles({
    overflow: 'auto',
    width: 'full',
  }),
]);

export const innerList = sprinkles({
  height: 'full',
  position: 'relative',
});
