import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '~/components';
import { useStore } from '~/hooks';
import * as styles from './styles.css';

export const FontPreview = observer(() => {
  const {
    fonts: { activeFont },
  } = useStore();

  // TODO: add null state
  if (!activeFont) {
    return null;
  }

  return (
    <Box className={styles.container}>
      <Box as="h1" className={styles.title}>
        {activeFont.name}
      </Box>
    </Box>
  );
});
