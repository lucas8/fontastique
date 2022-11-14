import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '~/styles';

export const variants = recipe({
  variants: {
    ellipsis: {
      true: sprinkles({
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }),
    },
  },
});

export type Variants = RecipeVariants<typeof variants>;
