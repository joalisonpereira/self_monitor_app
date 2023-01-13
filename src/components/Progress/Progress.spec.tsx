/**
 * @format
 */

import 'react-native';
import {render} from '@testing-library/react-native';
import wrapThemeProvider from 'src/styles/wrapThemeProvider';
import Progress from './';

describe('components/Progress', () => {
  it('should render component', () => {
    render(wrapThemeProvider(<Progress color="#000" filled={0.5} />));
  });

  it('should render component with specific props in line', () => {
    const {getByTestId} = render(
      wrapThemeProvider(<Progress color="#222" filled={1} />),
    );

    expect(getByTestId('progress-line').props.color).toBe('#222');

    expect(getByTestId('progress-line').props.filled).toBe(1);
  });
});
