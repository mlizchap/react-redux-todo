import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';
import { storeFactory } from '../../testUtils';


it('renders the app to the screen', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('.component-app');
    expect(appComponent.length).toBe(1);
})

