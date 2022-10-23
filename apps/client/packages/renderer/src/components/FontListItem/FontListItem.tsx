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
    <li className={styles.container({ isActive: font.isActive })} onClick={() => fonts.setActiveFont(font)}>
      {font.name}
    </li>
  );
});
