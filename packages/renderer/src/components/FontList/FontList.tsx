import { observer } from 'mobx-react-lite';
import { useStore } from '~/hooks';
import { FontListItem, VirtualizedList } from '~/components';

export const FontList = observer(() => {
  const { fonts } = useStore();

  return (
    <VirtualizedList size={60 + 10}>
      {fonts.all.map(font => (
        <FontListItem key={font.id} font={font} />
      ))}
    </VirtualizedList>
  );
});
