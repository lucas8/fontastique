import React from 'react';
import { RootStoreProvider } from '~/contexts';
import { DragArea, FontList, FontPreview, Layout, ThemeProvider, WindowControls } from '~/components';
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
        <DragArea />
        <WindowControls />
        <Layout>
          <FontList />
          <FontPreview />
        </Layout>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
