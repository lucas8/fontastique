import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('body', {
  height: vars.space.full,
  margin: 0,
});

globalStyle('html', {
  fontSize: vars.fontSizes.body,
  background: vars.colors.background,
  color: vars.colors.text,
  textRendering: 'optimizeLegibility',
  lineHeight: vars.lineHeights.body,
  fontFamily: vars.fonts.body,
});

globalStyle('a', {
  textDecoration: 'none',
});