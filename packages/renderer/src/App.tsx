import { RootStoreProvider } from '~/contexts';
import { FontList, Layout, ThemeProvider, FontCardList } from '~/components';
import { useSnapshot } from '~/hooks';

import '~/styles/app.css';
import '~/styles/reset.css';

const App = () => {
  const snapshot = useSnapshot();

  return (
    <RootStoreProvider snapshot={snapshot}>
      <ThemeProvider>
        <Layout>
          <FontList />
          <FontCardList />
        </Layout>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
