import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '~/styles';

export const container = recipe({
  base: style([
    style({ height: 70 }),
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 1,
      px: 2,
      py: 2,
      borderRadius: 'small',
      cursor: 'pointer',
    }),
  ]),
  variants: {
    isActive: {
      true: sprinkles({ backgroundColor: 'backgroundSecondary' }),
    },
  },
});

export const title = sprinkles({
  fontFamily: 'body',
  fontSize: 'title',
  fontWeight: 'bold',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  letterSpacing: 'default',
  overflow: 'hidden',
});

export const caption = sprinkles({
  fontFamily: 'header',
  fontSize: 'caption',
  fontWeight: 'medium',
  color: 'textSecondary',
});
