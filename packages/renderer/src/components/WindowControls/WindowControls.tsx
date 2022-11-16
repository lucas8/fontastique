import React from 'react';
import { Box } from '~/components';
import * as styles from './styles.css';

export const WindowControls = () => (
  <Box className={styles.container}>
    {new Array(3).fill(true).map((_, i) => (
      <Box style={{ width: '10px', height: '10px' }} key={i} backgroundColor="textSecondary" borderRadius="circle" />
    ))}
  </Box>
);
