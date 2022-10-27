import { observer } from 'mobx-react-lite';
import * as styles from './styles.css';
import { useStore } from '~/hooks';
import { FontCard } from '../FontCard/FontCard';

export const FontCardList = observer(() => {
  const { fonts } = useStore();

  return (
    <div className={styles.container}>
      {fonts.all.map(font => (
        <FontCard key={font.id} font={font} />
      ))}
    </div>
  );
});
