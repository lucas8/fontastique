import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '~/styles';

export const container = recipe({
  base: sprinkles({
    borderYWidth: 'half',
    width: 'full',
    height: 'full',
    display: 'flex',
    alignItems: 'center',
    paddingX: '4',
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
  gap: '2',
  width: 'full',
});

// TODO: create pre-defined text guidelines
export const count = sprinkles({
  fontFamily: 'mono',
  fontWeight: 'medium',
  color: 'textSecondary',
  fontSize: 'caption',
});

export const title = sprinkles({
  fontSize: 'title',
  width: 'full',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  letterSpacing: '0.03',
});
