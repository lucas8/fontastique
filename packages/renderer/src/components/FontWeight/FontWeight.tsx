import React from 'react';
import { observer } from 'mobx-react-lite';
import { FontWeight as FontWeightModel } from '~/models';
import { Box, Tag, Text } from '~/components';
import { vars } from '~/styles';
import * as styles from './styles.css';
import { getFontWeightName } from '~/utils';

getFontWeightName;
type FontWeightProps = {
  fontWeight: FontWeightModel;
};

export const FontWeight = observer<FontWeightProps>(({ fontWeight }) => {
  return (
    <Box display="flex" gap="4" flexDirection="column">
      <Box className={styles.headerContainer}>
        <Text letterSpacing="0.03" size="body" weight="medium" ellipsis lineHeight="none">
          {fontWeight.weightName}
        </Text>
        {fontWeight.italic && (
          <Tag>
            <i>itallic</i>
          </Tag>
        )}
      </Box>
      <Box paddingX="4">
        <Text
          size="heading"
          style={{
            fontSize: '24px',
            fontWeight: fontWeight.weight,
            fontFamily: `${fontWeight.postscriptName}, ${vars.fonts.body}`,
          }}
        >
          Whereas disregard and contempt for human rights have resulted
        </Text>
      </Box>
    </Box>
  );
});
