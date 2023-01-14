import {useNavigation} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import {useCallback, useLayoutEffect} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useActivities} from 'src/store/useActivities';
import theme from 'src/styles/theme';
import ActivityItem from './ActivityItem';
import {Container, ContainerProps, HeaderRightBtn} from './styles';

export interface ActivityProps extends ContainerProps {}

function Activity({}: ActivityProps) {
  const navigation = useNavigation();

  const {activities, close} = useActivities();

  const handleClose = useCallback((id: string) => close(id), [close]);

  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightBtn
          onPress={() => navigation.navigate('AddActivity')}
          headerHeight={headerHeight}>
          <Icon name="plus" color={theme.light} size={20} />
        </HeaderRightBtn>
      ),
    });
  }, [navigation, headerHeight]);

  return (
    <Container>
      <FlatList
        data={activities}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ActivityItem item={item} onPress={handleClose} />
        )}
      />
    </Container>
  );
}

export default Activity;
