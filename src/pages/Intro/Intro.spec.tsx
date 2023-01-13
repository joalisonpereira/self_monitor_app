import 'react-native';
import {fireEvent, render} from 'src/test';
import * as Navigation from '@react-navigation/native';
import Intro from './';

describe('pages/Intro', () => {
  it('should render page', () => {
    render(<Intro />);
  });

  // it('should try navigate to home', () => {
  //   const mockedNavigation = jest.fn();

  //   jest
  //     .spyOn(Navigation, 'useNavigation')
  //     .mockReturnValue({navigate: mockedNavigation});

  //   const {getByTestId} = render(<Intro />);

  //   fireEvent.press(getByTestId('start-btn'));

  //   expect(mockedNavigation).toHaveBeenCalledTimes(1);
  // });
});
