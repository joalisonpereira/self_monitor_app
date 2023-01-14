import 'react-native';
import {act} from 'react-test-renderer';
import {RootStack} from 'src/routes';
import {useActivities} from 'src/store/useActivities';
import {render, waitFor} from 'src/test';
import {generateActivity} from 'src/test/utils';
import Home from './';

describe('pages/Home', () => {
  it('should render', () => {
    render(
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>,
    );
  });

  it('should render categories with right info', async () => {
    const activities = [
      generateActivity({category: 'Work'}),
      generateActivity({category: 'Books'}),
    ];

    const {queryByText, queryAllByText} = render(
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>,
    );

    act(() => {
      useActivities.setState({activities});
    });

    await waitFor(() => {
      expect(queryByText('100.00%')).toBeTruthy();

      expect(queryAllByText('1/1').length).toEqual(2);
    });
  });
});
