import { combineReducers } from 'redux';
import TodoReducer from './todoReducer';

const rootReducer = combineReducers({
    todos: TodoReducer
})

export default rootReducer;