import 'react-native';
import {CATEGORIES} from 'src/common/config';
import {useActivities} from 'src/store/useActivities';
import {act, fireEvent, render, waitFor} from 'src/test';
import AddActivity from './';

describe('pages/AddActivity', () => {
  it('should render', () => {
    render(<AddActivity />);
  });

  it('should add activity', async () => {
    const {getByPlaceholderText, getByTestId, getByText} = render(
      <AddActivity />,
    );

    const todoTitle = 'Go Work';

    const input = getByPlaceholderText('Title');

    act(() => {
      fireEvent.changeText(input, todoTitle);

      fireEvent.press(getByTestId(`CategoryButton_${CATEGORIES[0].title}`));

      fireEvent.press(getByText('Send'));
    });

    await waitFor(() => {
      expect(input.props.value).toBe(todoTitle);

      expect(useActivities.getState().activities.length).toEqual(1);

      expect(useActivities.getState().activities[0].title).toEqual(todoTitle);
    });
  });
});
