import React from 'react';
import { draggable } from '~/styles';
import { Box } from '~/components';

export const DragArea = () => (
  <Box
    className={draggable}
    width="full"
    position="absolute"
    left="0"
    top="0"
    height="28"
    zIndex="1"
    pointerEvents="none"
  />
);
