import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, FontWeight, Text } from '~/components';
import { useStore } from '~/hooks';
import * as styles from './styles.css';

export const FontPreview = observer(() => {
  const {
    fonts: { activeFont: font },
  } = useStore();

  // TODO: add null state
  if (!font) {
    return null;
  }

  return (
    <Box className={styles.container}>
      <Text as="h1" size="largeHeading" font="heading">
        {font.name}
      </Text>
      {font.weights.map(fontWeight => (
        <FontWeight key={fontWeight.id} fontWeight={fontWeight} />
      ))}
    </Box>
  );
});
