import { observer } from 'mobx-react-lite';
import { useStore } from '~/hooks';
import { useFontScroll } from '~/hooks/useFontScroll';
import { Font } from '~/models';
import * as styles from './styles.css';

type FontListItemProps = {
  font: Font;
};

export const FontListItem = observer<FontListItemProps>(({ font }) => {
  const { scrollToId } = useFontScroll();
  const { fonts } = useStore();

  return (
    <div
      className={styles.container({ isActive: font.isActive })}
      onClick={() => {
        fonts.setActiveFont(font);
        scrollToId(font.scrollIndex);
      }}
    >
      <span className={styles.title}>{font.name}</span>
      <span className={styles.caption}>Pangram Pangram</span>
    </div>
  );
});
