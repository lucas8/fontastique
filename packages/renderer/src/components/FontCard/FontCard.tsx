import * as styles from './styles.css';
import { Font } from '~/models';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';

type FontCardProps = {
  font: Font;
};

export const FontCard = observer<FontCardProps>(({ font }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={ref} className={styles.container({ active: font.isActive })}>
      <h2>{font.name}</h2>
      <span>Panagram Panagram</span>
      {/* Tags */}
    </div>
  );
});
