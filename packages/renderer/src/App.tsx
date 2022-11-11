import React from 'react';
import { RootStoreProvider } from '~/contexts';
import { Box, Layout, ThemeProvider } from '~/components';
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
        <Layout>
          <Box as="h1" margin="10">
            Yooo what is up
          </Box>
        </Layout>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
