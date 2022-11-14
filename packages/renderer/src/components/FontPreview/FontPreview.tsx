import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '~/components';
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
      <Box as="h1" className={styles.title}>
        {font.name}
      </Box>
      {font.weights.map(fontWeight => {
        return <p>{fontWeight.postscriptName}</p>;
      })}
    </Box>
  );
});
