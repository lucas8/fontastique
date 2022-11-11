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
} from './tokens';

export const vars = createGlobalTheme(':root', {
  colors,
  space,
  fonts,
  lineHeights,
  fontWeights,
  fontSizes,
  letterSpacings,
  borderRadii,
  borderWidths,
});
