import React from 'react';
import Todo from './Todo';

import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { storeFactory } from '../../testUtils';


// renders a div with the title of the todo 
it('renders a div', () => {
    const store = storeFactory();
    const wrapper = mount(<Provider store={store}><Todo /></Provider>);
    const todoComponent = wrapper.find('.todo-component');
    expect(todoComponent.length).toBe(1);
})

it('is connected to the markComplete action creator prop', () => {
    const store = storeFactory();
    const wrapper = shallow(<Todo store={store}/>).dive();
    const completeProp = wrapper.instance().props.markComplete;
    expect(completeProp).toBeInstanceOf(Function);
});


