import { useRef } from 'react';
import * as styles from './styles.css';
import { Font } from '~/models';
import { observer } from 'mobx-react-lite';

type FontCardProps = {
  font: Font;
};

export const FontCard = observer<FontCardProps>(({ font }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className={styles.container({
        active: font.isActive,
        isUnfocused: font.isNonActiveDarkCard,
      })}
    >
      <h2 className={styles.header}>{font.name}</h2>
      <span className={styles.caption}>TypeType Foundery</span>
      {/* Tags */}
    </div>
  );
});
