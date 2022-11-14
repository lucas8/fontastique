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

export const count = sprinkles({
  fontFamily: 'mono',
  fontWeight: 'medium',
  color: 'textSecondary',
  fontSize: 'caption',
});

export const title = sprinkles({
  fontSize: 'title',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  letterSpacing: '0.03',
  width: 'full',
  maxWidth: '48',
});

export const fontPreview = sprinkles({
  letterSpacing: '0.03',
  fontSize: 'heading',
  textAlign: 'right',
  lineHeight: '2',
});
