import { shallow } from 'enzyme';
import App from './App';

//input and tag fields
describe('renders input fields', () => {
  it('renders name field', () => {
    const wrapper = shallow(<App />);
    const nameField = wrapper.find('.name-search');
    expect(document.documentElement, nameField).toBeInTheDocument();
  });

  it('renders tag field', () => {
    const wrapper = shallow(<App />);
    const searchField = wrapper.find('.tag-search');
    expect(document.documentElement, searchField).toBeInTheDocument();
  });
});

//loading
it('renders Loading', () => {
  const wrapper = shallow(<App />);
  const loadingMsg = wrapper.find('.error-msg').text();
  expect(loadingMsg).toBe('Loading...');
});
