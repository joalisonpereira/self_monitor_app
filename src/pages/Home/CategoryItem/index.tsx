import {TouchableOpacityProps} from 'react-native';
import {CategoryProps} from 'src/common/types';
import Progress from 'src/components/Progress';
import {
  Container,
  ContainerProps,
  Title,
  Badge,
  BadgeTitle,
  BoxIcon,
} from './styles';

export interface CategoryItemProps extends ContainerProps {
  item: CategoryProps;
  onPress: TouchableOpacityProps['onPress'];
  doneLabel: string;
  progress: number;
}

function CategoryItem({item, doneLabel, onPress, progress}: CategoryItemProps) {
  return (
    <Container testID="CategoryItem" onPress={onPress}>
      <BoxIcon color={item.color}>{item.Icon}</BoxIcon>
      <Title mt={2}>{item.title}</Title>
      <Progress mt={2} color={item.color} filled={progress} />
      <Badge color={item.color}>
        <BadgeTitle>{doneLabel}</BadgeTitle>
      </Badge>
    </Container>
  );
}

export default CategoryItem;
