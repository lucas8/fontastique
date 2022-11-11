import React from 'react';
import { RootStoreProvider } from '~/contexts';
import { Layout, ThemeProvider } from '~/components';
import { useSnapshot } from '~/hooks';

import '~/styles/app.css';

const App = () => {
  const snapshot = useSnapshot();

  // TODO: make this look nicer lol
  if (snapshot.length === 0) {
    return <span>loading...</span>;
  }

  return (
    <RootStoreProvider snapshot={snapshot}>
      <ThemeProvider>
        <Layout>yo</Layout>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
