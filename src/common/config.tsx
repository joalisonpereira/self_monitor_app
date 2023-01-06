import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import theme from 'src/styles/theme';
import {CategoryProps} from 'src/common/types';

export const CATEGORIES: readonly CategoryProps[] = [
  {
    title: 'Books',
    color: theme.primary,
    Icon: (
      <MaterialCommunityIcon
        name="book-open-blank-variant"
        size={16}
        color={theme.light}
      />
    ),
  },
  {
    title: 'Emails',
    color: theme.orange,
    Icon: (
      <MaterialCommunityIcon
        name="email-outline"
        size={16}
        color={theme.light}
      />
    ),
  },
  {
    title: 'Work',
    color: theme.purple,
    Icon: <MaterialIcon name="work-outline" size={16} color={theme.light} />,
  },
  {
    title: 'Urgent',
    color: theme.danger,
    Icon: <AntDesignIcon name="warning" size={16} color={theme.light} />,
  },
];
