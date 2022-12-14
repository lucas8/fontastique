import { sprinkles } from '~/styles';

export const headerContainer = sprinkles({
  height: '7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'backgroundSecondary',
  position: 'sticky',
  borderYWidth: 'px',
  top: '0',
  paddingX: '2',
  overflow: 'hidden',
});

export const fontWeightPreviewInput = sprinkles({
  width: 'full',
  fontSize: 'heading',
  background: 'transparent',
  borderWidth: '0',
  outline: 'none',
});
