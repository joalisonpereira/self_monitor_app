import 'react-native';
import {render} from 'src/test';
import Input from './';

describe('components/Input', () => {
  it('should render component', () => {
    render(<Input />);
  });

  it('should render value text', () => {
    const value = 'dummy';

    const {getByPlaceholderText} = render(
      <Input value={value} placeholder="DummyInput" />,
    );

    expect(getByPlaceholderText('DummyInput').props.value).toBe(value);
  });
});
