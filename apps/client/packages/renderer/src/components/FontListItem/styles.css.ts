import { recipe } from '@vanilla-extract/recipes';
import { reset, sprinkles } from '~/styles';

export const container = recipe({
  base: [
    reset,
    sprinkles({
      display: 'flex',
      px: 2,
      py: 2,
      borderRadius: 'small',
      cursor: 'pointer',
    }),
  ],
  variants: {
    isActive: {
      true: sprinkles({ backgroundColor: 'backgroundSecondary' }),
    },
  },
});
