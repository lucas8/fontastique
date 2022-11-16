import React from 'react';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { Box, FontWeight, Text } from '~/components';
import { useStore } from '~/hooks';
import * as styles from './styles.css';
import { noScrollBars } from '~/styles';

export const FontPreview = observer(() => {
  const {
    fonts: { activeFont: font },
  } = useStore();

  // TODO: add null state
  if (!font) {
    return null;
  }

  return (
    <Box className={clsx(styles.container, noScrollBars)}>
      <Box className={styles.headerContainer}>
        <Text as="h1" size="largeHeading" font="heading" ellipsis lineHeight="1.25">
          {font.name}
        </Text>
      </Box>
      <Box className={styles.weightWrapper}>
        {font.sortedWeights.map(fontWeight => (
          <FontWeight key={fontWeight.id} fontWeight={fontWeight} />
        ))}
      </Box>
    </Box>
  );
});
