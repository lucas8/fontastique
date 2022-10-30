import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useStore } from '~/hooks';
import { draggable } from '~/styles';
import * as styles from './styles.css';

export const Topbar = observer(() => {
  const { fonts } = useStore();
  const activeFontIsSelected = fonts.activeFont !== null;

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const prevFontId = useRef<string>('');

  useEffect(() => {
    if (!!fonts.activeFont && fonts.activeFont.id !== prevFontId.current) {
      setShouldAnimate(true);
      prevFontId.current = fonts.activeFont.id;
    }
  }, [fonts.activeFont]);

  return (
    <nav className={clsx(styles.container, draggable)}>
      <span className={styles.title}>Typescape</span>
      <span
        onAnimationEnd={() => setShouldAnimate(false)}
        className={clsx(styles.fontName, shouldAnimate && styles.animate)}
      >
        {activeFontIsSelected && `/ ${fonts.activeFont?.name}`}
      </span>
    </nav>
  );
});
