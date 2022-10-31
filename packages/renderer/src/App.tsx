import { useRef } from 'react';
import { RootStoreProvider, FontScrollProvider } from '~/contexts';
import { FontList, Layout, ThemeProvider, FontCardList } from '~/components';
import { useSnapshot } from '~/hooks';

import '~/styles/app.css';
import '~/styles/reset.css';

const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const snapshot = useSnapshot();

  return (
    <RootStoreProvider snapshot={snapshot}>
      <ThemeProvider>
        <FontScrollProvider scrollContainerRef={scrollContainerRef}>
          <Layout>
            <FontList />
            <FontCardList ref={scrollContainerRef} />
          </Layout>
        </FontScrollProvider>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
