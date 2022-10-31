import { useVirtualizer, Virtualizer } from '@tanstack/react-virtual';
import { observer } from 'mobx-react-lite';
import { createContext } from 'react';
import { useStore } from '~/hooks';

type FontScrollContext = {
  virtualizer: Virtualizer<HTMLDivElement | null, unknown>;
  scrollToId: (id: number) => void;
};

export const FontScrollContext = createContext<FontScrollContext | null>(null);

type FontScrollProviderProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
};

export const FontScrollProvider = observer<FontScrollProviderProps>(({ children, scrollContainerRef }) => {
  const { fonts } = useStore();

  console.log(fonts.all.length);
  const virtualizer = useVirtualizer({
    count: fonts.all.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => 300 + 10 + 8,
    overscan: 100,
  });

  return (
    <FontScrollContext.Provider
      value={{
        virtualizer,
        scrollToId: (id: number) => virtualizer.scrollToIndex(id, { align: 'start', smoothScroll: true }),
      }}
    >
      {children}
    </FontScrollContext.Provider>
  );
});
