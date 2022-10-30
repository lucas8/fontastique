import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import { useStore } from '~/hooks';
import { draggable } from '~/styles';
import * as styles from './styles.css';

export const Topbar = observer(() => {
  const { fonts } = useStore();
  const activeFontIsSelected = fonts.activeFont !== null;
  const navStyles = useSpring({
    x: activeFontIsSelected ? -50 : 0,
  });

  const prevActiveFontName = useRef<string>('');
  const initialHasRendered = useRef(true);

  const isReverse = prevActiveFontName.current.localeCompare(fonts.activeFont?.name || ' ') > 0;

  const transitions = useTransition([fonts.activeFont?.name.replace(/ /g, '\u00a0')], {
    from: isReverse ? { opacity: 0, y: -8 } : { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0, onRest: () => (prevActiveFontName.current = fonts.activeFont?.name || '') },
    leave: isReverse ? { opacity: 0, y: 8 } : { opacity: 0, y: -8 },
    immediate: initialHasRendered.current,
    exitBeforeEnter: true,
    config: {
      duration: 100,
    },
  });

  return (
    <animated.nav style={navStyles} className={clsx(styles.container, draggable)}>
      <span className={styles.title}>Typescape</span>
      {activeFontIsSelected && (
        <animated.span className={styles.fontName} onAnimationEnd={() => (initialHasRendered.current = false)}>
          <span className={styles.divider}>/</span>
          {transitions((style, item) => (
            <animated.span style={style} className={styles.fontItem}>
              {item}
            </animated.span>
          ))}
        </animated.span>
      )}
    </animated.nav>
  );
});

//
