import { style } from '@vanilla-extract/css';
import { sprinkles, vars } from '~/styles';

export const headerContainer = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const input = style({
  appearance: 'none',
  WebkitAppearance: 'none',
  height: vars.space['0.5'],
  background: vars.colors.textPrimary,
  borderRadius: '5px',
  selectors: {
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      WebkitAppearance: 'none',
      height: '14px',
      width: '14px',
      borderRadius: vars.borderRadii.circle,
      cursor: 'pointer',
      background: vars.colors.textPrimary,
    },
  },
});
