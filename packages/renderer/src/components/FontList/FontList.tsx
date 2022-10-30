import { observer } from 'mobx-react-lite';
import { useStore } from '~/hooks';
import { FontListItem } from '~/components';
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import * as styles from './styles.css';

export const FontList = observer(() => {
  const { fonts } = useStore();

  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: fonts.all.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60 + 10,
    overscan: 50,
  });

  return (
    <div ref={parentRef} className={styles.container}>
      <div
        className={styles.divider({ position: 'top', active: (parentRef.current?.scrollTop || 0) > 20 })}
        style={{ maxWidth: parentRef.current?.clientWidth }}
      />
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
            <FontListItem font={fonts.all[item.index]} />
          </li>
        ))}
      </ul>
      <div
        className={styles.divider({
          position: 'bottom',
          active: (parentRef.current?.scrollTop || 0) <= (virtualizer.getTotalSize() || 1000) - 600,
        })}
        style={{ maxWidth: parentRef.current?.clientWidth }}
      />
    </div>
  );
});
