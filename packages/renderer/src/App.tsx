import { useEffect } from 'react';
import { getAvailableFontFamilies } from '#preload';
import { RootStoreProvider, useStore } from '~/contexts';
import { observer } from 'mobx-react-lite';

const App = () => {
  useEffect(() => {
    console.log(getAvailableFontFamilies());
  }, []);

  return (
    <RootStoreProvider>
      <h1>Vite + React + lucas</h1>
      <SubComponent />
    </RootStoreProvider>
  );
};

const SubComponent = observer(() => {
  const store = useStore();

  return <h2>{store.testing ? 'true' : 'false'}</h2>;
});

export default App;
