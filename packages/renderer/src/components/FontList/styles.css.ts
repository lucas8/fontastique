import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { reset, sprinkles } from '~/styles';

export const container = style([
  reset,
  sprinkles({
    overflow: 'auto',
    width: 'full',
    position: 'relative',
    height: 'viewHeight',
  }),
]);

export const divider = recipe({
  base: {
    pointerEvents: 'none',
    position: 'fixed',
    left: '12px',
    width: '100%',
    height: '50px',
    zIndex: 5,
    transition: 'opacity ease 400ms',
  },
  variants: {
    active: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
    position: {
      top: {
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #101010 100%);',
      },
      bottom: {
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #101010 100%);',
      },
    },
  },
});

export const innerList = style([
  sprinkles({
    height: 'full',
    position: 'relative',
    overflow: 'hidden',
  }),
]);
