import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';
import { fontWeights } from './tokens';

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
  minHeight: vars.space.viewHeight,
});

Object.values(fontWeights).forEach(weight => {
  globalFontFace('Hubot-Sans', {
    fontStyle: 'normal',
    fontWeight: weight,
    src: `url("fonts/Hubot-Sans/Hubot-Sans.woff") format("woff"),
        url("fonts/Hubot-Sans/Hubot-Sans.woff2") format("woff2")`,
  });
});

globalFontFace('IBM Plex Mono', {
  fontStyle: 'normal',
  fontWeight: fontWeights.medium,
  src: `url("fonts/IBMPlexMono/IBMPlexMono-Medium.woff") format("woff"),
        url("fonts/IBMPlexMono/IBMPlexMono-Medium.woff2") format("woff2")`,
});

globalFontFace('VC Henrietta', {
  fontStyle: 'normal',
  fontWeight: fontWeights.bold,
  src: `url("fonts/VCHenrietta/VCHenrietta-Bold.woff") format("woff"),
        url("fonts/VCHenrietta/VCHenrietta-Bold.woff2") format("woff2")`,
});
