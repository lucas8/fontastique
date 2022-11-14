import React from 'react';
import { RootStoreProvider } from '~/contexts';
import { FontList, FontPreview, Layout, ThemeProvider } from '~/components';
import { useSnapshot } from '~/hooks';

import '~/styles/app.css';

const App = () => {
  const snapshot = useSnapshot();

  if (snapshot.length === 0) {
    return null;
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
