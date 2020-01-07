import { createStore, applyMiddleware } from 'redux';

export default (reduces, middlewares) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reduces, enhancer);
};
