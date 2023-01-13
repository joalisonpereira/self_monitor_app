/**
 * @format
 */

import 'react-native';
import {render} from '@testing-library/react-native';
import wrapThemeProvider from 'src/styles/wrapThemeProvider';
import Input from './';

describe('components/Input', () => {
  it('should render component', () => {
    render(wrapThemeProvider(<Input />));
  });

  it('should render value text', () => {
    const value = 'dummy';

    const {getByPlaceholderText} = render(
      wrapThemeProvider(<Input value={value} placeholder="DummyInput" />),
    );

    expect(getByPlaceholderText('DummyInput').props.value).toBe(value);
  });
});
