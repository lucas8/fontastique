import React from 'react';
import { Topbar } from '../Topbar';
import * as styles from './styles.css';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Topbar />
      <main className={styles.container}>{children}</main>
    </>
  );
};
