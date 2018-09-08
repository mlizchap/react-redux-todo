import { storeFactory } from '../testUtils';
import { createTodo, markcomplete } from './';

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
xit('when markComplete is dispatched, state is updated', () => {

})