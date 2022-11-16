import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FontWeight } from '~/models';
import { Box, Text } from '~/components';
import { motion, AnimatePresence } from 'framer-motion';

type FontNameProps = {
  fontWeight: FontWeight;
};

// TODO: refactor this lol
export const FontName = observer<FontNameProps>(({ fontWeight }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box
      cursor="default"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      position="relative"
      height="7"
      width="48"
      maxWidth="48"
      paddingY="1.5"
    >
      <AnimatePresence initial={false} mode="wait">
        {isHovering ? (
          <motion.div
            key="a"
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.1 }}
            style={{ position: 'absolute' }}
          >
            <Text
              color="textSecondary"
              letterSpacing="0.03"
              size="body"
              weight="medium"
              ellipsis
              lineHeight="none"
              maxWidth="72"
            >
              {fontWeight.postscriptName}
            </Text>
          </motion.div>
        ) : (
          <motion.div
            key="b"
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
            transition={{ duration: 0.1 }}
            style={{ position: 'absolute' }}
          >
            <Text letterSpacing="0.03" size="body" weight="medium" ellipsis lineHeight="none">
              {fontWeight.weightName}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
});
