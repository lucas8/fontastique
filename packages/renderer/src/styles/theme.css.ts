import { createGlobalTheme } from '@vanilla-extract/css';
import {
  colors,
  space,
  fonts,
  lineHeights,
  fontWeights,
  fontSizes,
  borderRadii,
  borderWidths,
  letterSpacings,
  transitions,
  borderStyles,
  opacity,
} from './tokens';

export const vars = createGlobalTheme(':root', {
  opacity,
  colors,
  space,
  fonts,
  lineHeights,
  fontWeights,
  fontSizes,
  letterSpacings,
  borderRadii,
  borderWidths,
  borderStyles,
  transitions,
});
