import {act} from 'src/test';
const actualCreate = jest.requireActual('zustand');

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set<Function>();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = (createState: typeof actualCreate) => {
  const store = actualCreate.default(createState);

  const initialState = store.getState();

  storeResetFns.add(() => {
    store.setState(initialState, true);
  });

  return store;
};

// Reset all stores after each test run
beforeEach(async () => {
  await act(() =>
    storeResetFns.forEach(resetFn => {
      resetFn();
    }),
  );
});

export default create;
