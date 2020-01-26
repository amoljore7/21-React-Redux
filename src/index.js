import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './Component/reducer';

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Xroot = ()=>{
    return (<Provider store={store}> <App /> </Provider>);
}

ReactDOM.render(<Xroot/>, document.getElementById('root'));


