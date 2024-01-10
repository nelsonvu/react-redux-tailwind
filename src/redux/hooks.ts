import { AppDispatch, RootState } from '@frontend/redux-store';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export const useReduxDispatch = (): AppDispatch => useDispatch();

export const useReduxSelector = <T extends readonly (keyof RootState)[]>(
  keys: T,
) =>
  useSelector((state: RootState) => {
    const result = {} as { [K in T[number]]: RootState[K] };

    keys.forEach(key => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      result[key] = state[key];
    });

    return result;
  }, shallowEqual);
