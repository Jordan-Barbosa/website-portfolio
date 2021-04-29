import type { RootState } from 'ROOT';

import { createStore } from 'redux';
import { middlewares } from './middlewares';
import { reducers } from './reducers';

function initStore(initialState: RootState) {
  return createStore(reducers, initialState, middlewares);
}

let store: ReturnType<typeof initStore> | undefined;

export const initializeStore = (preloadedState: RootState) => {
  let $store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    $store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return $store;

  // Create the store once in the client
  if (!store) store = $store;

  return $store;
};
