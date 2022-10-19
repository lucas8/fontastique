import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { getAvailableFontFamilies } from '#preload';
import { RootStoreProvider } from '~/contexts';
import { useStore } from '~/hooks/useStore';
import { TSnapshot } from '~/stores';

const App = () => {
  const [snapshot, setSnapshot] = useState<TSnapshot>([]);

  useEffect(() => {
    const fontFamilies = getAvailableFontFamilies();

    setSnapshot(fontFamilies.map(ff => ({ __typename: 'FontFamily', name: ff })));
  }, []);

  if (snapshot.length <= 0) {
    return <span>loading...</span>;
  }

  return (
    <RootStoreProvider snapshot={snapshot}>
      <h1>Vite + React + lucas</h1>
      <SubComponent />
    </RootStoreProvider>
  );
};

const SubComponent = observer(() => {
  const { fontFamilies } = useStore();

  console.log(fontFamilies.all);

  return (
    <div>
      {fontFamilies.all.map(ff => (
        <h2 key={ff.id}>{ff.name}</h2>
      ))}
    </div>
  );
});

export default App;
