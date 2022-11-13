import React from 'react';
import { RootStoreProvider } from '~/contexts';
import { Box, FontList, FontPreview, Layout, ThemeProvider } from '~/components';
import { useSnapshot } from '~/hooks';

import '~/styles/app.css';

const App = () => {
  const snapshot = useSnapshot();

  // TODO: make this look nicer lol
  if (snapshot.length === 0) {
    return <Box />;
  }

  return (
    <RootStoreProvider snapshot={snapshot}>
      <ThemeProvider>
        <Layout>
          <FontList />
          <FontPreview />
        </Layout>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
