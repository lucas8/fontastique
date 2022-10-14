import { useEffect } from 'react';
import { getAvailableFontFamilies } from '#preload';

function App() {
  useEffect(() => {
    console.log(getAvailableFontFamilies());
  }, []);

  return (
    <div>
      <h1>Vite + React</h1>
    </div>
  );
}

export default App;
