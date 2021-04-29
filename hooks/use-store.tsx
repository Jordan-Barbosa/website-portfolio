import type { RootState } from 'ROOT';

import { useMemo } from 'react';
import { initializeStore } from '../redux';

export function useStore(initialState: RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
}
