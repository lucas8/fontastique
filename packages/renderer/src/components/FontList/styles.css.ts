import { sprinkles } from '~/styles';

export const container = sprinkles({
  overflow: 'auto',
  width: 'full',
  position: 'relative',
  height: 'viewHeight',
  borderRightWidth: 'px',
});

export const innerList = sprinkles({
  height: 'full',
  position: 'relative',
  overflow: 'hidden',
});
