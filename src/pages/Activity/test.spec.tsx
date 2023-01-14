import 'react-native';
import {RootStack} from 'src/routes';
import {useActivities} from 'src/store/useActivities';
import {act, fireEvent, render, waitFor} from 'src/test';
import {generateActivity} from 'src/test/utils';
import Activity from './';

jest.mock('@react-navigation/native', () =>
  jest.requireActual('@react-navigation/native'),
);

describe('pages/Activity', () => {
  it('should render', () => {
    render(
      <RootStack.Navigator>
        <RootStack.Screen name="Activity" component={Activity} />
      </RootStack.Navigator>,
    );
  });

  it('should render activity', async () => {
    const activity = generateActivity();

    const {queryByText} = render(
      <RootStack.Navigator>
        <RootStack.Screen name="Activity" component={Activity} />
      </RootStack.Navigator>,
    );

    act(() => {
      useActivities.setState({activities: [activity]});
    });

    await waitFor(() => {
      expect(queryByText(activity.title)).toBeTruthy();
    });
  });

  it('should render mark activity as done', async () => {
    const activity = generateActivity({doneAt: null});

    const {getByText} = render(
      <RootStack.Navigator>
        <RootStack.Screen name="Activity" component={Activity} />
      </RootStack.Navigator>,
    );

    act(() => {
      useActivities.setState({activities: [activity]});
    });

    act(() => {
      fireEvent.press(getByText(activity.title));
    });

    await waitFor(() => {
      expect(useActivities.getState().activities[0].doneAt).toBeTruthy();
    });
  });
});
