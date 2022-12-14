import { style } from '@vanilla-extract/css';
import { vars } from '~/styles';

export const container = style({
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  gap: '8px',
  paddingTop: '8px',
  paddingLeft: '8px',
  zIndex: 1,
  opacity: 0.3,
});

export const trafficLight = style({
  width: '10px',
  height: '10px',
  backgroundColor: vars.colors.textSecondary,
  borderRadius: vars.borderRadii.circle,
});
