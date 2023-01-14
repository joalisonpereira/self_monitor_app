import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {useFormik} from 'formik';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import {useActivities} from 'src/store/useActivities';
import {useNavigation} from '@react-navigation/native';
import {CATEGORIES} from 'src/common/config';
import {
  CategoryButton,
  Container,
  ContainerProps,
  Inner,
  CategoryRow,
} from './styles';

export interface AddActivityProps extends ContainerProps {}

function AddActivity({}: AddActivityProps) {
  const navigation = useNavigation();

  const add = useActivities(state => state.add);

  const formik = useFormik({
    initialValues: {
      title: '',
      doneAt: null,
      category: CATEGORIES[0].title,
    },
    onSubmit: values => {
      navigation.goBack();

      add({
        id: uuid(),
        title: values.title,
        doneAt: values.doneAt,
        category: values.category,
      });
    },
  });

  return (
    <Container>
      <Inner>
        <Input
          value={formik.values.title}
          onChangeText={formik.handleChange('title')}
          placeholder="Title"
        />
        <CategoryRow mt={3}>
          {CATEGORIES.map(item => (
            <CategoryButton
              testID={`CategoryButton_${item.title}`}
              onPress={() => formik.setFieldValue('category', item.title)}
              active={formik.values.category === item.title}
              key={item.title}
              color={item.color}>
              {item.Icon}
            </CategoryButton>
          ))}
        </CategoryRow>
      </Inner>
      <Button variant="default" onPress={formik.submitForm}>
        Send
      </Button>
    </Container>
  );
}

export default AddActivity;
