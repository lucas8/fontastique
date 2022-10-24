import { observer } from 'mobx-react-lite';
import { useStore } from '~/hooks';
import { Font } from '~/models';
import * as styles from './styles.css';

type FontListItemProps = {
  font: Font;
};

export const FontListItem = observer<FontListItemProps>(({ font }) => {
  const { fonts } = useStore();

  return (
    <div className={styles.container({ isActive: font.isActive })} onClick={() => fonts.setActiveFont(font)}>
      <span className={styles.title}>{font.name}</span>
      <span className={styles.caption}>Pangram Pangram</span>
    </div>
  );
});
