import React from 'react';
import { observer } from 'mobx-react-lite';
import { Font } from '~/models';
import { Box } from '~/components';
import * as styles from './styles.css';
import { vars } from '~/styles';

type FontListItemProps = {
  font: Font;
};

// TODO: check if this method of rendering fonts works on linux/windows
export const FontListItem = observer(({ font }: FontListItemProps) => {
  return (
    <Box className={styles.container({ active: font.isActive })} onClick={font.setActive}>
      <Box className={styles.textWrapper}>
        <Box as="span" className={styles.count}>
          {font.displayIndex < 10 ? '0' : ''}
          {font.displayIndex}.
        </Box>
        <Box as="h4" className={styles.title}>
          {font.name}
        </Box>
      </Box>
      <Box
        as="h4"
        className={styles.fontPreview}
        style={{ fontFamily: `${font.name}, ${vars.fonts.body}`, fontWeight: 'bold' }}
      >
        Aa
      </Box>
    </Box>
  );
});
