import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('body', {
  height: vars.space.full,
  margin: 0,
  overflow: 'hidden',
});

globalStyle('#root', {
  height: vars.space.full,
  fontSize: vars.fontSizes.body,
  background: vars.colors.backgroundPrimary,
  color: vars.colors.textPrimary,
  textRendering: 'optimizeLegibility',
  lineHeight: vars.lineHeights.none,
  fontFamily: vars.fonts.body,
});
