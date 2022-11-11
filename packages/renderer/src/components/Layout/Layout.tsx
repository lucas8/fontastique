import React from 'react';
import * as styles from './styles.css';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={styles.container}>{children}</main>
    </>
  );
};
