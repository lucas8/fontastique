import { useLayoutEffect, useRef } from 'react';

export const useLatestRef = <T>(value: T) => {
  const ref = useRef(value);
  useLayoutEffect(() => {
    ref.current = value;
  });
  return ref;
};
