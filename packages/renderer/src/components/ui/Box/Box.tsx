import clsx from 'clsx';
import { createElement, AllHTMLAttributes, ElementType } from 'react';
import { sprinkles, Sprinkles } from '~/styles/sprinkles.css';
import * as reset from '~/styles/reset.css';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'className' | 'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor' | 'as'
    >,
    Sprinkles {
  as?: ElementType;
  className?: Parameters<typeof clsx>[0];
}

export const Box = ({
  as: asElement = 'div',
  className,
  fontFamily,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  borderRadius,
  position,
  top,
  bottom,
  left,
  right,
  inset,
  background,
  color,
  width,
  zIndex,
  opacity,
  pointerEvents,
  cursor,
  textAlign,
  maxWidth,
  minWidth,
  transition,
  overflow,
  ...restProps
}: BoxProps) => {
  const atomClasses = clsx(
    reset.base,
    reset.element[asElement as keyof typeof reset.element],
    sprinkles({
      fontFamily,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      flexGrow,
      flexShrink,
      borderRadius,
      position,
      top,
      bottom,
      left,
      right,
      inset,
      background,
      color,
      width,
      zIndex,
      opacity,
      pointerEvents,
      cursor,
      textAlign,
      maxWidth,
      minWidth,
      transition,
      overflow,
    }),
    className,
  );

  return createElement(asElement, { className: atomClasses, ...restProps });
};
