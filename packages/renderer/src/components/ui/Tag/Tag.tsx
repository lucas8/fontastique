import React from 'react';
import { Box, Text } from '~/components';
import * as styles from './style.css';

export const Tag = ({ children }: React.PropsWithChildren) => {
  return (
    <Box className={styles.container}>
      <Text weight="bold" size="caption" color="backgroundPrimary" textTransform="uppercase" letterSpacing="0.03">
        {children}
      </Text>
    </Box>
  );
};
