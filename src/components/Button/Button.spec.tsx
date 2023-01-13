/**
 * @format
 */

import 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './';

describe('components/Button', () => {
  it('should render component with different modes', () => {
    render(<Button variant="darked">Send</Button>);

    render(<Button variant="default">Send</Button>);
  });

  it('should render the title', async () => {
    const {findByText} = render(<Button variant="darked">Send</Button>);

    expect(await findByText('Send')).toBeDefined();
  });

  it('should call onPress', async () => {
    const onPress = jest.fn();

    const {getByText} = render(
      <Button variant="darked" onPress={onPress}>
        Send
      </Button>,
    );

    fireEvent.press(getByText('Send'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
