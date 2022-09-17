import { useSelector } from 'react-redux';
import { IStore } from '../store';

export const user = () => {
  const state = useSelector((state: IStore) => {
    return state.auth.user;
  });

  return state;
};
