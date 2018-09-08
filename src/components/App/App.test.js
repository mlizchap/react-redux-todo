import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';
import { storeFactory } from '../../testUtils';


let wrapper;
beforeEach(() => {
    //const store = storeFactory();
    wrapper = shallow(<App />);
})

xit('renders the header to the screen', () => {
    wrapper.find('.component-header');
    console.log(wrapper.debug())
})

// it('renders the todolist to the screen', () => {
//     //const todoListComponent = wrapper.find('.component-todolist')
//     //expect(todoListComponent.length).toBe(1);
// });

// it('renders the add form to the screen', () => {

// })