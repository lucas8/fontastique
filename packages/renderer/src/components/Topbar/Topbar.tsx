import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useStore } from '~/hooks';
import { draggable } from '~/styles';
import * as styles from './styles.css';

export const Topbar = observer(() => {
  const { fonts } = useStore();
  const activeFontIsSelected = fonts.activeFont !== null;

  return (
    <nav className={clsx(styles.container, draggable)}>
      <span className={styles.title}>Typescape</span>
      {activeFontIsSelected && `/ ${fonts.activeFont?.name}`}
    </nav>
  );
});
