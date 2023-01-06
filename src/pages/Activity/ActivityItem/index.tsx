import {memo} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {ActivityProps} from 'src/common/types';
import theme from 'src/styles/theme';
import {Container, Title} from './styles';

export interface ActivityItemProps {
  item: ActivityProps;
  onPress: (id: string) => void;
}

function ActivityItem({item, onPress}: ActivityItemProps) {
  return (
    <Container active={!!item.doneAt} onPress={() => onPress(item.id)}>
      <Title>{item.title}</Title>
      {!!item.doneAt && <Icon name="check" color={theme.light} />}
    </Container>
  );
}

export default memo(ActivityItem);
