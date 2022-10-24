import { createGlobalTheme, style } from '@vanilla-extract/css';
import { colors, space, fonts, lineHeights, fontWeights, fontSizes, borderRadii } from './tokens';

export const vars = createGlobalTheme(':root', {
  colors,
  space,
  fonts,
  lineHeights,
  fontWeights,
  fontSizes,
  borderRadii,
});
