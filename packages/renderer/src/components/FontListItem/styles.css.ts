import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '~/styles';

export const container = recipe({
  base: sprinkles({
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    px: 2,
    py: 2,
    borderRadius: 'small',
    cursor: 'pointer',
  }),
  variants: {
    isActive: {
      true: sprinkles({ backgroundColor: 'backgroundSecondary' }),
    },
  },
});

export const title = sprinkles({
  fontSize: 'title',
  fontWeight: 'bold',
});

export const caption = sprinkles({
  fontSize: 'caption',
  fontWeight: 'normal',
  color: 'stroke',
});
