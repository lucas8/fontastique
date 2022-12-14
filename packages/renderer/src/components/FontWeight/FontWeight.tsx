import React from 'react';
import { observer } from 'mobx-react-lite';
import { FontWeight as FontWeightModel } from '~/models';
import { Box, Tag } from '~/components';
import { vars } from '~/styles';
import * as styles from './styles.css';
import { getFontWeightName } from '~/utils';
import { FontName } from './FontName';

getFontWeightName;
type FontWeightProps = {
  fontWeight: FontWeightModel;
};

export const FontWeight = observer<FontWeightProps>(({ fontWeight }) => {
  return (
    <Box display="flex" gap="4" flexDirection="column">
      <Box className={styles.headerContainer}>
        <FontName fontWeight={fontWeight} />
        {fontWeight.italic && (
          <i>
            <Tag>italic</Tag>
          </i>
        )}
      </Box>
      <Box paddingX="4">
        <input
          type="text"
          className={styles.fontWeightPreviewInput}
          style={{
            fontWeight: fontWeight.weight,
            fontFamily: `${fontWeight.postscriptName}, ${vars.fonts.body}`,
          }}
          onChange={e => fontWeight.font?.updatePreviewText(e.target.value)}
          value={fontWeight.font?.previewText}
        />
      </Box>
    </Box>
  );
});
