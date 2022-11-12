import React from 'react';
import { observer } from 'mobx-react-lite';
import { Font } from '~/models';
import { Box } from '~/components';
import * as styles from './styles.css';

type FontListItemProps = {
  font: Font;
};

export const FontListItem = observer(({ font }: FontListItemProps) => {
  return (
    <Box className={styles.container({ active: font.isActive })} onClick={font.setActive}>
      <Box className={styles.textWrapper}>
        <Box as="span" className={styles.count}>
          {font.displayIndex < 10 ? '0' : ''}
          {font.displayIndex}
        </Box>
        <Box as="h4" className={styles.title}>
          {font.name}
        </Box>
      </Box>
    </Box>
  );
});
