import React from 'react';
import { observer } from 'mobx-react-lite';
import { Font } from '~/models';
import { Box, Text } from '~/components';
import * as styles from './styles.css';
import { vars } from '~/styles';

type FontListItemProps = {
  font: Font;
};

// TODO: check if this method of rendering fonts works on linux/windows
export const FontListItem = observer(({ font }: FontListItemProps) => {
  return (
    <Box className={styles.container({ active: font.isActive })} onClick={font.setActive}>
      <Box className={styles.textWrapper} style={{ flex: '1' }}>
        <Text as="span" font="mono" weight="medium" color="textSecondary" size="caption">
          {font.displayIndex < 10 ? '0' : ''}
          {font.displayIndex}.
        </Text>
        <Text maxWidth="48" size="title" weight="bold" ellipsis={true} letterSpacing="0.03">
          {font.name}
        </Text>
      </Box>
      <Text
        letterSpacing="0.03"
        size="heading"
        align="right"
        lineHeight="2"
        weight="bold"
        style={{ fontFamily: `${font.name}, ${vars.fonts.body}` }}
      >
        Aa
      </Text>
    </Box>
  );
});
