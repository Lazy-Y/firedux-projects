import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {
  getFirestore,
  reduxFirestore,
  createFirestoreInstance,
} from 'redux-firestore';
import firebase, {rrfConfig} from './config/fbConfig';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(firebase),
  ),
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.register();
