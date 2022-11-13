import React from 'react';
import { Box } from '../ui';
import * as styles from './styles.css';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box as="main" className={styles.container}>
        {children}
      </Box>
    </>
  );
};
