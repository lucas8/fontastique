import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FontWeight as FontWeightModel } from '~/models';
import { Box, Text } from '~/components';
import { vars } from '~/styles';
import * as styles from './styles.css';

type FontWeightProps = {
  fontWeight: FontWeightModel;
};

export const FontWeight = observer<FontWeightProps>(({ fontWeight }) => {
  const [fontSize, setFontSize] = useState('24');

  return (
    <Box>
      <Box className={styles.headerContainer}>
        <Text marginBottom="2" letterSpacing="0.03" size="body" color="textSecondary" weight="medium" ellipsis>
          {fontWeight.font?.name} &#8212; {fontWeight.weight}
          {fontWeight.italic && <>&#8212; italic</>}
        </Text>
        <Box
          className={styles.input}
          as="input"
          min={12}
          max={64}
          type="range"
          value={fontSize}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFontSize(e.target.value)}
        />
      </Box>
      <Text
        size="heading"
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight.weight,
          fontFamily: `${fontWeight.postscriptName}, ${vars.fonts.body}`,
        }}
      >
        Whereas disregard and contempt for human rights have resulted
      </Text>
    </Box>
  );
});
