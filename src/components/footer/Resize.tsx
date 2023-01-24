import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameSizes } from '../../shared/constants';
import { AppState } from '../../shared/types';
import { ResizeProps } from './Resize.types';
import styles from './Resize.module.scss';

export const Resize: FC<ResizeProps> = () => {
  const dispatch = useDispatch();

  const size = useSelector((state: AppState) => state.size);
  const minSize = gameSizes[0];
  const maxSize = gameSizes[gameSizes.length - 1];

  return (
    <div className={styles.resize}>
      <label htmlFor="size" className={styles.label}>
        Size: {size}
      </label>
      <input
        className={styles.range}
        type="range"
        min={minSize}
        max={maxSize}
        list="sizes"
        id="size"
        value={size}
        onInput={(e) => {
          let currentValue = parseInt(e.currentTarget.value, 10);

          if (currentValue < minSize) currentValue = minSize;
          else if (currentValue > maxSize) currentValue = maxSize;

          dispatch({ type: 'SET_SIZE', size: currentValue });
        }}
      />
      <datalist id="sizes">
        {gameSizes.map((gameSize) => (
          <option value={gameSize} label={gameSize.toString()} />
        ))}
      </datalist>
    </div>
  );
};
