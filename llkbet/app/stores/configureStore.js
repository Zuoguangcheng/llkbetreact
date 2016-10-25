import {createStore} from 'redux';
import rootApp from '../reducers/reducers';
export default function configureStore(initialState) {
  const store = createStore(rootApp, initialState);
  if (module.hot) {
    module.hot.accept('../reducers/reducers', () => {
      const nextReducer = require('../reducers/reducers');
    store.replaceReducer(nextReducer);
  });
  }
  return store;
}
