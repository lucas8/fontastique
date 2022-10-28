import { Children, useMemo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import * as styles from './styles.css';

type VirtualizedListProps = {
  size: number;
  overscan?: number;
  children?: React.ReactNode;
};

export const VirtualizedList = ({ size, children, overscan = 10 }: VirtualizedListProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childrenCount = useMemo(() => Children.count(children), [children]);

  const virtualizer = useVirtualizer({
    count: childrenCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => size,
    overscan,
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
            {Children.toArray(children)[item.index]}
          </li>
        ))}
      </ul>
    </div>
  );
};
