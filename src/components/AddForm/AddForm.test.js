import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../testUtils';

import AddForm from './AddForm';

it('renders an input and submit button to the screen', () => {    
    const store = storeFactory();
    const wrapper = shallow(<AddForm store={store} />).dive();
    const input = wrapper.find('.addform-component__input');
    const submitBtn = wrapper.find('.addform-component__submit-button');
    expect(input.length).toBe(1);
    expect(submitBtn.length).toBe(1);    
});

it('when user enters input text, the state reflects the change', () => {
    const userInput = 'x';
    const store = storeFactory();
    const wrapper = shallow(<AddForm store={store} />).dive();
    const input = wrapper.find('.addform-component__input');
    input.simulate('change', { target: { value: userInput }});
    expect(wrapper.state().value).toEqual(userInput);

})

it('when user submits form, input is cleared', () => {
    const userInput = 'x';
    const store = storeFactory();
    const wrapper = shallow(<AddForm store={store} />).dive();
    const input = wrapper.find('.addform-component__input');
    input.simulate('change', { target: { value: userInput }});
    wrapper.simulate('submit', { preventDefault() {} });
    expect(wrapper.find('.addform-component__input').props().value).toBe('');
})

it('has acces to the the createTodo props', () => {
    const todos = [{
        name: 'x',
        completed: false
    }]
    const store = storeFactory({todos});
    const wrapper = shallow(<AddForm store={store} />).dive();
    const createTodoProp = wrapper.instance().props.createTodo;
    expect(createTodoProp).toBeInstanceOf(Function);
})

it('if a user clicks submit with nothing in the input, does not submit', () => {
    const userInput = '';
    const store = storeFactory();
    const wrapper = shallow(<AddForm store={store} />).dive();
    const input = wrapper.find('.addform-component__input');
    input.simulate('change', { target: { value: userInput }});
    wrapper.simulate('submit', { preventDefault() {} });
    expect(store.getState().todos.length).toBe(0);
})

it('does not submit if user tries to submit a duplicate todo', () => {
    const todos = [{ name: 'x', completed: false }]
    const store = storeFactory({todos})
    const wrapper = shallow(<AddForm store={store} />).dive();
    const input = wrapper.find('.addform-component__input');
    input.simulate('change', { target: { value: 'x' }});
    wrapper.simulate('submit', { preventDefault() {} });

    expect(store.getState().todos.length).toBe(1);
})




describe('error message', () => {
    it('displays a warning message when a duplicate todo is submitted', () => {
        const todos = [{ name: 'x', completed: false }]
        const store = storeFactory({todos})
        const wrapper = shallow(<AddForm store={store} />).dive();
        const input = wrapper.find('.addform-component__input');
        input.simulate('change', { target: { value: 'x' }});
        wrapper.simulate('submit', { preventDefault() {} });
        const error = wrapper.find('.error-message');
        expect(error.length).toBe(1);
    })

    it('error message does not display on initial render', () => {
        const store = storeFactory()
        const wrapper = shallow(<AddForm store={store} />).dive();
        const error = wrapper.find('.error-message');
        expect(error.length).toBe(0);
    })

    it('error message does not display on submit of unique todo', () => {
        const store = storeFactory();
        const wrapper = shallow(<AddForm store={store} />).dive();
        const input = wrapper.find('.addform-component__input');
        input.simulate('change', { target: { value: 'x' }});
        const error = wrapper.find('.error-message');
        expect(error.length).toBe(0);
    })

})