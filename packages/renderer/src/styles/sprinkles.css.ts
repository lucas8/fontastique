import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

import './reset.css';

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;

const flexibility = [0, 1, 2, 3, 4] as const;

const properties = defineProperties({
  properties: {
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    borderWidth: vars.borderWidths,
    fontFamily: vars.fonts,
    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
    borderRadius: vars.borderRadii,
    borderBottomLeftRadius: vars.borderRadii,
    borderBottomRightRadius: vars.borderRadii,
    borderTopLeftRadius: vars.borderRadii,
    borderTopRightRadius: vars.borderRadii,
    bottom: vars.space,
    display: ['block', 'flex', 'grid', 'inline-block', 'none', 'contents'],
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: vars.space,
    flexDirection: ['column', 'row'],
    flexGrow: flexibility,
    flexShrink: flexibility,
    flexWrap: ['wrap', 'nowrap'],
    fontSize: {
      ...vars.fontSizes,
      inherit: 'inherit',
    },
    fontWeight: vars.fontWeights,
    gap: vars.space,
    width: vars.space,
    height: vars.space,
    inset: vars.space,
    justifyContent: [...flexAlignment, 'space-around', 'space-between'],
    justifySelf: flexAlignment,
    left: vars.space,
    letterSpacing: vars.letterSpacings,
    lineHeight: vars.lineHeights,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    marginTop: vars.space,
    maxHeight: vars.space,
    maxWidth: {
      ...vars.space,
      none: 'none',
    },
    minHeight: vars.space,
    minWidth: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    right: vars.space,
    top: vars.space,
    transition: vars.transitions,
    opacity: vars.opacity,
    borderStyle: vars.borderStyles,
    overflow: ['auto', 'hidden', 'scroll', 'unset'],
    textAlign: ['center', 'left', 'right'],
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    zIndex: ['-1', '0', '1'],
    pointerEvents: ['none', 'auto'],
    cursor: ['pointer', 'default'],
    textOverflow: ['ellipsis', 'clip'],
    whiteSpace: ['initial', 'nowrap', 'normal'],
  },
  shorthands: {
    borderYWidth: ['borderTopWidth', 'borderBottomWidth'],
    borderXWidth: ['borderLeftWidth', 'borderRightWidth'],
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
  },
  defaultCondition: 'base',
  properties: {
    backgroundColor: vars.colors,
    background: vars.colors,
    borderColor: vars.colors,
    color: vars.colors,
    outlineColor: vars.colors,
  },
});

export const sprinkles = createSprinkles(properties, selectorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
