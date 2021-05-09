import { combineReducers, createStore, applyMiddleware } from "redux";
import projectsListReducer from './projectsList-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    projectsList: projectsListReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;