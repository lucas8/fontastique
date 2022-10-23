import { useEffect, useState } from 'react';
import { getAvailableFontFamilies } from '#preload';
import { RootStoreProvider } from '~/contexts';
import { TSnapshot } from '~/stores';
import { FontList, ThemeProvider } from '~/components';
import './styles/app.css';

const App = () => {
  const [snapshot, setSnapshot] = useState<TSnapshot>([]);

  useEffect(() => {
    const fontFamilies = getAvailableFontFamilies();

    setSnapshot(fontFamilies.map(ff => ({ __typename: 'Font', name: ff })));
  }, []);

  if (snapshot.length <= 0) {
    return <span>loading...</span>;
  }

  return (
    <RootStoreProvider snapshot={snapshot}>
      <ThemeProvider>
        <FontList />
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
