import { style } from '@vanilla-extract/css';
import { reset, sprinkles } from '~/styles';

export const container = style([
  reset,
  sprinkles({
    overflow: 'scroll',
    width: 'full',
  }),
]);

export const innerList = sprinkles({
  height: 'full',
  position: 'relative',
});
