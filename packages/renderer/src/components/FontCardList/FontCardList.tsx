import { observer } from 'mobx-react-lite';
import { useStore } from '~/hooks';
import { FontCard } from '../FontCard/FontCard';
import { VirtualizedList } from '../VirtualizedList';

export const FontCardList = observer(() => {
  const { fonts } = useStore();

  return (
    <VirtualizedList size={300 + 10}>
      {fonts.all.map(font => (
        <FontCard key={font.id} font={font} />
      ))}
    </VirtualizedList>
  );
});
