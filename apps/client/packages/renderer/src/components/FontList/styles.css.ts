import { style } from '@vanilla-extract/css';
import { reset, sprinkles } from '~/styles';

export const container = style([reset, sprinkles({})]);
