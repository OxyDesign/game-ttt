import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ResetProps } from './Reset.types';
import styles from './Reset.module.scss';

export const Reset: FC<ResetProps> = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={styles.reset}
      onClick={() => {
        dispatch({ type: 'RESET' });
      }}
    >
      Reset
    </button>
  );
};
