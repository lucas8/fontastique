import { FontDescriptor } from 'font-scanner';

export const createTreeFromSystem = (fonts: FontDescriptor[]) => {
  // let fontId: Record<string, string> = {};

  // const weights: Partial<FontWeight>[] = fonts.map(font => {
  //   const { weight, style, path, italic, monospace, postscriptName } = font;

  //   let id = fontId[font.family];

  //   if (!id) {
  //     const newiD = createModelId();
  //     fontId[font.family] = newiD;
  //   }

  //   return { weight, style, path, italic, monospace, postscriptName, font_id: '' };
  // });

  // const tree = fonts.reduce((acc, font) => {
  //   const prevFont = acc[font.family];
  //   const fontId = prevFont?.id || createModelId();

  //   const weight = {
  //     font_id: fontId,
  //     path: font.path,
  //     style: font.style,
  //     weight: font.weight,
  //     italic: font.italic,
  //     monospace: font.monospace,
  //     postscriptName: font.postscriptName,
  //   };

  //   return {
  //     [font.family]: {
  //       id: fontId,
  //       name: prevFont?.name || font.family,
  //       weights: Array.from(acc[font.family]?.weights || []).push(weight),
  //     },
  //     ...acc,
  //   };
  // }, {} as Record<string, any>);

  return {};
};
