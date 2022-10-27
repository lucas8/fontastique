import { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useStore } from '~/hooks';
import { FontListItem } from '~/components';
import * as styles from './styles.css';

export const FontList = observer(() => {
  const { fonts } = useStore();
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: fonts.all.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60,
    overscan: 10,
  });

  return (
    <div ref={parentRef} className={styles.container}>
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
    </div>
  );
});
