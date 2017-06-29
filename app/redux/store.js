import { createStore, applyMiddleware } from 'redux';
import composeWithDevTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './modules';

const initialState = {
  recentLocations: [
    {id: 0, icon: 'home', title: 'Home', subtitle: '123 Spear St, San Francisco'},
    {id: 1, icon: 'recent', title: 'Zynga HQ', subtitle: '699 8th St, San Francisco'},
    {id: 2, icon: 'recent', title: 'Facebook HQ', subtitle: '888 Brannan St, San Francisco, CA'},
    {id: 3, icon: 'recent', title: '123 Apple Road', subtitle: 'Cupertino, CA'},
    {id: 4, icon: 'recent', title: '445 1st St', subtitle: 'Sunnyvale, CA'},
  ],
};

const store = createStore((state) => state, initialState);

if (module.hot) {
  const acceptCallback = () => {
    const nextRootReducer = require('./modules').default;
    store.replaceReducer(nextRootReducer);
  };
  module.hot.accept('./modules', acceptCallback);
  module.hot.acceptCallback = acceptCallback;
}

export default store;
