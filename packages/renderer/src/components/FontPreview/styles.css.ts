import { sprinkles } from '~/styles';

export const container = sprinkles({
  paddingY: '4',
  paddingX: '4',
  overflowX: 'scroll',
});

export const weightWrapper = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
});
