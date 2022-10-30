import * as styles from './styles.css';
import { Font } from '~/models';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { useStore } from '~/hooks';

type FontCardProps = {
  font: Font;
};

export const FontCard = observer<FontCardProps>(({ font }) => {
  const { fonts } = useStore();
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className={styles.container({
        active: font.isActive,
        isUnfocused: !!fonts.activeFont && font.id !== fonts.activeFont.id,
      })}
    >
      <h2 className={styles.header}>{font.name}</h2>
      <span className={styles.caption}>TypeType Foundery</span>
      {/* Tags */}
    </div>
  );
});
