import { style } from '@vanilla-extract/css';
import { sprinkles, vars } from '~/styles';

export const headerContainer = sprinkles({
  display: 'flex',
  alignItems: 'flex-start',
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
/*
	-webkit-appearance: none;
	height: 7px;
	background: grey;
	border-radius: 5px;
	background-image: linear-gradient(#d46a6a, #d46a6a);
	background-repeat: no-repeat;
  */
