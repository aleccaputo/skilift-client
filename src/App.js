import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import {appReducer} from './reducers';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./screens/login";

const store = createStore(appReducer);

const App = () =>
  (
    <Provider store={store}>
      <Router>
        <Route path={'/login'} component={Login}/>
      </Router>
    </Provider>
  );

export default App;
