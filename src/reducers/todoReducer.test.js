import { CREATE_TODO, MARK_COMPLETE } from '../actions';
import todoReducer from './todoReducer'

it('returns the initial state when the reducer accepts no action', () => {
    const newState = todoReducer([], {});
    expect(newState).toEqual([]);
})

it('returns state with another todo when the reducer accepts the createTodo action', () => {
    const newState = todoReducer([], {type: CREATE_TODO, payload: 'x'});
    expect(newState).toEqual([{ name: 'x', completed: false }])
})

it('changes complete to false when the reducer accepts the markComplete action and the initial state is true', () => {
    const newState = todoReducer([{ name: 'x', completed: true}], {type: MARK_COMPLETE, payload: 'x'});
    expect(newState).toEqual([{ name: 'x', completed: false }])
})

it('changes complete to true when the reducer accepts the markComplete action and the initial state is false', () => {
    const newState = todoReducer([{ name: 'x', completed: false}], {type: MARK_COMPLETE, payload: 'x'});
    expect(newState).toEqual([{ name: 'x', completed: true }])
})
