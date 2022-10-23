import { RootStoreProvider } from '~/contexts';
import { FontList, Layout, ThemeProvider } from '~/components';
import { useSnapshot } from '~/hooks';

import '~/styles/app.css';

const App = () => {
  const snapshot = useSnapshot();

  return (
    <RootStoreProvider snapshot={snapshot}>
      <ThemeProvider>
        <Layout>
          <FontList />
        </Layout>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
