import React from 'react';
import { observer } from 'mobx-react-lite';
import { FontWeight as FontWeightModel } from '~/models';
import { Box, Text } from '~/components';
import { vars } from '~/styles';

type FontWeightProps = {
  fontWeight: FontWeightModel;
};

export const FontWeight = observer<FontWeightProps>(({ fontWeight }) => {
  return (
    <Box>
      <Text marginBottom="2" letterSpacing="0.03" size="body" color="textSecondary" weight="medium" ellipsis>
        {fontWeight.font?.name} &#8212; {fontWeight.weight}
        {fontWeight.italic && <>&#8212; italic</>}
      </Text>
      <Text
        size="heading"
        style={{ fontWeight: fontWeight.weight, fontFamily: `${fontWeight.postscriptName}, ${vars.fonts.body}` }}
      >
        If you don’t like what’s being
      </Text>
    </Box>
  );
});
