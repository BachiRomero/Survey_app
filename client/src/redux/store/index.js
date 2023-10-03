import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from '../reducer'



// esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// esta línea es para poder hacer peticiones a un server
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));



export default store