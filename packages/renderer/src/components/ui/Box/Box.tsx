import clsx from 'clsx';
import { createElement, AllHTMLAttributes, ElementType, forwardRef } from 'react';
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

export const Box = forwardRef(
  (
    {
      as: asElement = 'div',
      className,
      fontFamily,
      fontSize,
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
    }: BoxProps,
    ref,
  ) => {
    const atomClasses = clsx(
      reset.base,
      reset.element[asElement as keyof typeof reset.element],
      sprinkles({
        fontFamily,
        fontSize,
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

    return createElement(asElement, { ref, className: atomClasses, ...restProps });
  },
);
