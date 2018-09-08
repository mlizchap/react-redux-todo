
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
require('raf').polyfill();

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};

Enzyme.configure({ 
  adapter: new EnzymeAdapter(),
});