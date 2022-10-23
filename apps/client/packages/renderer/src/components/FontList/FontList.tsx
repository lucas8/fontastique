import { observer } from 'mobx-react-lite';
import { useStore } from '~/hooks';
import { FontListItem } from '~/components';
import clsx from 'clsx';
import * as styles from './styles.css';

export const FontList = observer(() => {
  const { fonts } = useStore();

  return (
    <ul className={clsx(styles.container)}>
      {fonts.all.map(font => (
        <FontListItem key={font.id} font={font} />
      ))}
    </ul>
  );
});
