import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import {appReducer} from './reducers';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./screens/login";
import IsAuthed from './components/is-authed';
import IsNotAuthed from './components/is-not-authed';
import Home from './screens/home';

const store = createStore(appReducer);

const App = () =>
    (
        <Provider store={store}>
            <IsAuthed>
                <Router>
                    <Route path={'/home'} component={Home}/>
                </Router>
            </IsAuthed>
            <IsNotAuthed>
                <Login/>
            </IsNotAuthed>
        </Provider>
    );

export default App;
