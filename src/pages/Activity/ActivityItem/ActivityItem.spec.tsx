import 'react-native';
import ActivityItem from './';
import {fireEvent, render} from 'src/test';
import {generateActivity} from 'src/test/utils';

describe('pages/Activity/ActivityItem', () => {
  it('should render', () => {
    render(<ActivityItem item={generateActivity()} onPress={() => {}} />);
  });

  it('should press item with id', () => {
    const mockedOnPress = jest.fn();

    const item = generateActivity();

    const {getByTestId} = render(
      <ActivityItem item={item} onPress={mockedOnPress} />,
    );

    fireEvent.press(getByTestId('ActivityItem'));

    expect(mockedOnPress).toBeCalledTimes(1);

    expect(mockedOnPress).toHaveBeenCalledWith(item.id);
  });

  it('should render icon when have doneAt', async () => {
    const item = generateActivity();

    const {queryByTestId} = render(
      <ActivityItem item={item} onPress={() => {}} />,
    );

    expect(queryByTestId('ActivityItem_Icon')).toBeTruthy();
  });

  it('should not render icon when not have doneAt', async () => {
    const item = {...generateActivity(), doneAt: null};

    const {queryByTestId} = render(
      <ActivityItem item={item} onPress={() => {}} />,
    );

    expect(queryByTestId('ActivityItem_Icon')).not.toBeTruthy();
  });
});
