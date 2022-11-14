import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '~/styles';

export const container = recipe({
  base: sprinkles({
    borderYWidth: 'half',
    width: 'full',
    height: 'full',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingX: '2.5',
    cursor: 'default',
  }),
  variants: {
    active: {
      true: sprinkles({ backgroundColor: 'backgroundSecondary' }),
    },
  },
});

export const textWrapper = sprinkles({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.5',
  width: 'full',
});
