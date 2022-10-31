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
      borderWidth: 1.5,
    }),
    style({
      height: 300,
      transition: 'all ease 200ms',
    }),
  ]),
  variants: {
    isUnfocused: {
      true: {
        opacity: 0.8,
      },
    },
    active: {
      true: sprinkles({ borderColor: 'darkAccent' }),
    },
  },
});

export const header = sprinkles({
  // fontFamily: 'body',
  fontSize: 'largeHeading',
  fontWeight: 'bold',
  color: 'black',
});

export const caption = sprinkles({
  fontFamily: 'header',
  fontSize: 'title',
  fontWeight: 'medium',
  color: 'stroke',
});
