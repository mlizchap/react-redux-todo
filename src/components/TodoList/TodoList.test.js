import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import { storeFactory } from '../../testUtils';
import TodoList from './TodoList';

// has access to the todo state 
it('has access to the todo state props', () => {
    const todos = [{
        name: 'x',
        completed: false 
    }]
    const store = storeFactory({todos});
    const wrapper = mount(<Provider store={store}><TodoList /></Provider>);
    const todo = wrapper.find('.todo-component');
    expect(todo.text()).toBe('x');
});

// when there is no state renders todos to the screen
it('renders no todos to the screen when there is no todos state props', () => {
    const store = storeFactory();
    const wrapper = mount(<Provider store={store}><TodoList /></Provider>);
    const todo = wrapper.find('.todo-component');
    expect(todo.length).toBe(0);
})

// when there is todo state, renders to the screen (1 per todo)
it('renders todos to the screen when there is todos state props', () => {
    const todos = [
        {
            name: 'x',
            completed: false
        }, 
        {
            name: 'y',
            completed: false
        }
    ]
    const store = storeFactory({todos})
    const wrapper = mount(<Provider store={store}><TodoList /></Provider>);
    const todoComponents = wrapper.find('.todo-component');
    expect(todoComponents.length).toBe(2);
});

