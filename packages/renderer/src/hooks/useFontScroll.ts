import { useContext } from 'react';
import { FontScrollContext } from '~/contexts/FontScrollContext';

export const useFontScroll = () => {
  const store = useContext(FontScrollContext);

  if (!store) {
    throw new Error('useFontScroll must be used within a FontScrollProvider.');
  }

  return store;
};
