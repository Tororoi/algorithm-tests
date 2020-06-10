import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux dependencies
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// routing dependencies
import {BrowserRouter} from 'react-router-dom'

// Thunky stuff
import ReduxThunk from 'redux-thunk'
import {applyMiddleware, compose} from 'redux'



// if an action gets dispatched, that action will be ran through all of the reducers
let rootReducer = combineReducers({

  // any other reducers will go here
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let storeObject = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))


ReactDOM.render(
  <BrowserRouter>
  <Provider store={storeObject}>
    <App />
  </Provider>
</BrowserRouter>,
  document.getElementById('root')
);
