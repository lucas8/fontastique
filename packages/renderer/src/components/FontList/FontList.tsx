import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { useStore } from '~/hooks';
import { Box, FontListItem } from '~/components';
import * as styles from './styles.css';
import { noScrollBars } from '~/styles';

export const FontList = observer(() => {
  const { fonts } = useStore();

  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: fonts.all.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 50,
  });

  return (
    <Box ref={parentRef} className={clsx(styles.container, noScrollBars)}>
      <Box
        as="ul"
        className={styles.innerList}
        style={{
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        {virtualizer.getVirtualItems().map(item => (
          <Box
            as="li"
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
          </Box>
        ))}
      </Box>
    </Box>
  );
});
