import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { getAvailableFontFamilies } from '#preload';
import { RootStoreProvider } from '~/contexts';
import { useStore } from './hooks/useStore';

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
  const { fontFamilies } = useStore();

  console.log(fontFamilies.all);
  return (
    <div>
      {fontFamilies.all.map(ff => (
        <h2 key={ff.id}>{ff.name}</h2>
      ))}
      <button onClick={() => fontFamilies.create({ name: 'Ariel' })}>click me</button>
    </div>
  );
});

export default App;
