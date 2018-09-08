import { CREATE_TODO, MARK_COMPLETE } from "../actions";

const test = [{
        name: 'do this',
        completed: false 
    },
    {
        name: 'do that',
        completed: false
    }]


export default (state = [], action) => {
    switch (action.type) {
        case (CREATE_TODO):
            return [...state, {name: action.payload, completed: false}]
        case (MARK_COMPLETE):
            console.log(state)
            return state.map(t => {
                return (t.name === action.payload) ? {...t, completed: !t.completed} : t 
            })
        default:
            return state;
    }
}