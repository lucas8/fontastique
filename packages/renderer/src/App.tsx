import { useEffect } from 'react';
import { getAvailableFontFamilies } from '#preload';
import { StoreProvider } from './contexts';

function App() {
  useEffect(() => {
    console.log(getAvailableFontFamilies());
  }, []);

  return (
    <StoreProvider>
      <h1>Vite + React + lucas</h1>
    </StoreProvider>
  );
}

export default App;
