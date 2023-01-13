import 'react-native';
import CategoryItem from './';
import {fireEvent, render} from 'src/test';
import {CATEGORIES} from 'src/common/config';

describe('pages/Activity/CategoryItem', () => {
  it('should render', () => {
    render(
      <CategoryItem
        item={CATEGORIES[0]}
        onPress={() => {}}
        doneLabel="1/1"
        progress={0.5}
      />,
    );
  });

  it('should press item', () => {
    const mockedOnPress = jest.fn();

    const doneLabel = '1/1';

    const {getByTestId, queryByText} = render(
      <CategoryItem
        item={CATEGORIES[0]}
        onPress={mockedOnPress}
        doneLabel="1/1"
        progress={1}
      />,
    );

    fireEvent.press(getByTestId('CategoryItem'));

    expect(mockedOnPress).toBeCalledTimes(1);

    expect(queryByText(doneLabel)).toBeTruthy();

    expect(queryByText(doneLabel)?.props.children).toEqual(doneLabel);
  });

  it('should render doneLabel', () => {
    const doneLabel = '1/1';

    const {queryByText} = render(
      <CategoryItem
        item={CATEGORIES[0]}
        onPress={() => {}}
        doneLabel="1/1"
        progress={1}
      />,
    );

    expect(queryByText(doneLabel)).toBeTruthy();

    expect(queryByText(doneLabel)?.props.children).toEqual(doneLabel);
  });
});
