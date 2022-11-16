import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { Box, FontWeight, Text } from '~/components';
import { useStore } from '~/hooks';
import * as styles from './styles.css';
import { nonDraggable, noScrollBars } from '~/styles';

export const FontPreview = observer(() => {
  const {
    fonts: { activeFont: font },
  } = useStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const prevFontId = useRef<string | null>(null);

  useEffect(() => {
    if (font && font.id !== prevFontId.current) {
      // no need to scroll if the prev id is null
      if (prevFontId.current !== null) {
        containerRef.current?.scrollTo({ top: 0 });
      }
      prevFontId.current = font.id;
    }
  }, [font]);

  // TODO: add null state
  if (!font) {
    return null;
  }

  return (
    <Box ref={containerRef} className={clsx(styles.container, noScrollBars)}>
      <Box className={styles.headerContainer}>
        <Text className={nonDraggable} as="h1" size="largeHeading" font="heading" lineHeight="1.25">
          {font.name}
        </Text>
      </Box>
      <Box className={styles.weightWrapper}>
        {font.sortedWeights.map(fontWeight => (
          <FontWeight key={fontWeight.id} fontWeight={fontWeight} />
        ))}
      </Box>
    </Box>
  );
});
