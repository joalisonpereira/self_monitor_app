import {useNavigation} from '@react-navigation/native';
import {chunk} from 'lodash';
import {useMemo} from 'react';
import {CATEGORIES} from 'src/common/config';
import {CategoryTitle} from 'src/common/types';
import Progress from 'src/components/Progress';
import {useActivities} from 'src/store/useActivity';
import theme from 'src/styles/theme';
import CategoryItem from './CategoryItem';
import {
  Container,
  ContainerProps,
  Title,
  TopCard,
  Label,
  Description,
  CategoriesRow,
} from './styles';

type CategoryStatistics = Record<
  CategoryTitle,
  {doneLabel: string; progress: number}
>;

export interface HomeProps extends ContainerProps {}

const chunkedCategories = chunk(CATEGORIES, 2);

function Home({}: HomeProps) {
  const navigation = useNavigation();

  const activities = useActivities(state => state.activities);

  const totalPercentage = useMemo(() => {
    const totalDone = activities
      .filter(i => !!i.doneAt)
      .reduce((total, item) => total + (item.doneAt ? 1 : 0), 0);

    return ((totalDone * 100) / Math.max(activities.length, 1)).toFixed(2);
  }, [activities]);

  const categoryStatistics = useMemo(() => {
    const info = CATEGORIES.reduce((cTotal, item) => {
      const categoryCount = activities.filter(i => i.category === item.title);

      const count = activities
        .filter(i => !!i.doneAt)
        .reduce((t, i) => t + (i.category === item.title ? 1 : 0), 0);

      return {
        ...cTotal,
        [item.title]: {
          doneLabel: `${count}/${categoryCount.length}`,
          progress: (count * 100) / activities.length,
        },
      };
    }, {} as CategoryStatistics);

    return info;
  }, [activities]);

  function handleActivity() {
    navigation.navigate('Activity');
  }

  return (
    <Container>
      <Title>Hello,{'\n'}Welcome back!</Title>
      <TopCard mt={2} onPress={handleActivity}>
        <Label>Daily progress</Label>
        <Description mt={2}>Here you can see your daily task</Description>
        <Label mt={2}>{totalPercentage}%</Label>
        <Progress
          color={theme.primary}
          filled={Number(totalPercentage)}
          mt={1}
        />
      </TopCard>
      <Label mt={2}>Categories</Label>
      {chunkedCategories.map(array => (
        <CategoriesRow key={array[0].title}>
          {array.map(item => (
            <CategoryItem
              key={item.title}
              item={item}
              onPress={handleActivity}
              doneLabel={`${categoryStatistics[item.title].doneLabel}`}
              progress={categoryStatistics[item.title].progress}
            />
          ))}
        </CategoriesRow>
      ))}
    </Container>
  );
}

export default Home;
