import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  gap: '8px',
  paddingTop: '8px',
  paddingLeft: '8px',
  zIndex: 1,
  opacity: 0.5,
});

export const trafficLight = style({
  width: '12px',
  height: '12px',
  backgroundColor: 'textSecondary',
  borderRadius: 'circle',
});
