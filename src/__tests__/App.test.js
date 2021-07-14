import { shallow } from 'enzyme';
import App from '../App';

it('renders Loading', () => {
  const wrapper = shallow(<App />);
  const loadingMsg = wrapper.find('.error-loading-msg').text();
  expect(loadingMsg).toBe('Loading...');
});
