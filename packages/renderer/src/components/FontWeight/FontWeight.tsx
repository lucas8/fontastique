import { observer } from 'mobx-react-lite';
import React from 'react';
import { FontWeight as FontWeightModel } from '~/models';

type FontWeightProps = {
  fontWeight: FontWeightModel;
};

export const FontWeight = observer<FontWeightProps>(({ fontWeight }) => {
  return <div>{fontWeight.postscriptName}</div>;
});
