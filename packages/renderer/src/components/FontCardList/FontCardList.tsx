import { observer } from 'mobx-react-lite';
import { useStore } from '~/hooks';
import { FontCard } from '../FontCard/FontCard';
import * as styles from '../VirtualizedList/styles.css';
import { useFontScroll } from '~/hooks/useFontScroll';
import { forwardRef } from 'react';

export const FontCardList = observer(
  forwardRef<HTMLDivElement>((_, ref) => {
    const { virtualizer } = useFontScroll();
    const { fonts, ui } = useStore();

    console.log(ui.isScrollBound);

    return (
      <div ref={ref} className={styles.container}>
        <ul
          className={styles.innerList}
          style={{
            height: `${virtualizer.getTotalSize()}px`,
          }}
        >
          {virtualizer.getVirtualItems().map(item => (
            <li
              key={item.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${item.size}px`,
                transform: `translateY(${item.start}px)`,
              }}
            >
              <FontCard font={fonts.all[item.index]} />
            </li>
          ))}
        </ul>
      </div>
    );
  }),
);
