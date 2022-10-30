import { style } from '@vanilla-extract/css';
import { reset, sprinkles } from '~/styles';

export const container = style([
  reset,
  sprinkles({
    overflow: 'scroll',
    width: 'full',
  }),
]);

export const innerList = style([
  sprinkles({
    height: 'full',
    position: 'relative',
  }),
  // style({
  //   selectors: {
  //     '&:before': {
  //       content: "''",
  //       position: 'fixed',
  //       top: 0,
  //       left: 0,
  //       right: 0,
  //       width: '100%',
  //       height: '50px',
  //       zIndex: 5,
  //       background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #101010 100%);',
  //       // backdropFilter: 'blur(0.5px)',
  //       // mask: `linear-gradient(
  //       //   to bottom,
  //       //   rgba(0, 0, 0, 0) 0%,
  //       //   rgba(0, 0, 0, 1) 12.5%,
  //       //   rgba(0, 0, 0, 1) 25%,
  //       //   rgba(0, 0, 0, 0) 37.5%
  //       // )`,
  //     },
  //   },
  // }),
]);
