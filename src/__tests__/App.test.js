import { shallow } from 'enzyme';
import App from '../App';

//input and tag fields
// describe('renders input fields', () => {});

//loading
it('renders Loading', () => {
  const wrapper = shallow(<App />);
  const loadingMsg = wrapper.find('.error-msg').text();
  expect(loadingMsg).toBe('Loading...');
});
