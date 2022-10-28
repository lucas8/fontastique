import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '~/styles';

export const container = recipe({
  base: style([
    sprinkles({
      backgroundColor: 'white',
      borderRadius: 'large',
      color: 'black',
      px: 4,
      py: 3,
      borderStyle: 'solid',
      borderWidth: 1,
    }),
    style({ height: 300 }),
  ]),
  variants: {
    active: {
      true: sprinkles({ borderColor: 'darkAccent' }),
    },
  },
});
