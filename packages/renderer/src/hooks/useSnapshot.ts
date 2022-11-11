import { useEffect, useState } from 'react';

export const useSnapshot = (): TSnapshot => {
  const [snapshot, setSnapshot] = useState<TSnapshot>([]);

  useEffect(() => {
    const getSnapshot = async () => {
      const snapshot = await window.api.initialSnapshot;

      setSnapshot(snapshot);
    };
    getSnapshot();
  }, []);

  return snapshot;
};
