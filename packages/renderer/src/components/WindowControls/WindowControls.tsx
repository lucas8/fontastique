import React from 'react';
import { Box } from '~/components';
import * as styles from './styles.css';

// TODO: fix this for windows/linux
export const WindowControls = () => (
  <Box className={styles.container}>
    <Box display="none">test</Box>
    {new Array(3).fill(true).map((_, i) => (
      <Box key={i} className={styles.trafficLight} />
    ))}
  </Box>
);
