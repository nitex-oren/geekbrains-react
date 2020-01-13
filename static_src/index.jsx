import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router'
import { Provider } from 'react-redux';
import {ConnectedRouter } from 'connected-react-router'
import {PersistGate} from 'redux-persist/integration/react'
import initStore, {history} from './utils/store';

const {store, persistor} = initStore()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Router />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);


