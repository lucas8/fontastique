import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('body', {
  height: vars.space.full,
  margin: 0,
  overflow: 'hidden',
});
