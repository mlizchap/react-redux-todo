import { storeFactory } from '../testUtils';
import { createTodo, markComplete } from './';

// dispatch createUser and test state 
it('when createTodo is dispatched, state is updated', () => {
    const userInput = 'x'
    const store = storeFactory();
    store.dispatch(createTodo(userInput));
    const expectedState = [{
        name: userInput,
        completed: false
    }]
    expect(store.getState().todos).toEqual(expectedState);
})

// dispatch markcomplete and test state 
it('when markComplete is dispatched, state is updated', () => {
    const store = storeFactory({todos: [{ name: 'x', completed: false }]});
    store.dispatch(markComplete('x'));
    const expectedState = [{
        name: 'x',
        completed: true
    }]
    expect(store.getState().todos).toEqual(expectedState);
})