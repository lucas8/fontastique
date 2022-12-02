import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../Box';
import * as styles from './styles.css';

type TextProps = {
  as?: 'code' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';
  children?: React.ReactNode;
  align?: BoxProps['textAlign'];
  color?: BoxProps['color'];
  font?: BoxProps['fontFamily'];
  letterSpacing?: BoxProps['letterSpacing'];
  lineHeight?: BoxProps['lineHeight'];
  size?: BoxProps['fontSize'];
  weight?: BoxProps['fontWeight'];
  whiteSpace?: BoxProps['whiteSpace'];
  maxWidth?: BoxProps['maxWidth'];
  style?: BoxProps['style'];
  marginBottom?: BoxProps['marginBottom'];
  textTransform?: BoxProps['textTransform'];
  display?: BoxProps['display'];
  height?: BoxProps['height'];
  className?: BoxProps['className'];
  contentEditable?: BoxProps['contentEditable'];
} & styles.Variants;

export const Text = forwardRef(
  (
    { as = 'div', color = 'textPrimary', font = 'body', ellipsis, size, weight, align, className, ...rest }: TextProps,
    ref: React.Ref<HTMLElement>,
  ) => {
    return (
      <Box
        as={as}
        className={clsx(
          styles.variants({
            ellipsis: ellipsis ? true : undefined,
          }),
          className,
        )}
        color={color}
        fontWeight={weight}
        fontFamily={font}
        fontSize={size}
        textAlign={align}
        ref={ref}
        {...rest}
      />
    );
  },
);
