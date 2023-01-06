import {Dimensions} from 'react-native';
import {create} from 'react-native-pixel-perfect';

const perfectSize = create(Dimensions.get('window'));

const theme = {
  primary: '#0e8dff',
  dark1: '#1a1a1a',
  dark2: '#333333',
  dark3: '#858585',
  orange: '#ffb300',
  purple: '#bd5cff',
  danger: '#f66',
  green: '#7dff58',
  light: '#f3f3f3',
  grey: '#dcdcdc',
  safeMargin: perfectSize(8),
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
};

export default theme;
