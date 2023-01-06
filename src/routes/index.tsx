import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from 'src/pages/Intro';
import Home from 'src/pages/Home';
import Activity from 'src/pages/Activity';
import theme from 'src/styles/theme';
import AddActivity from 'src/pages/AddActivity';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerTitleAlign: 'left'}}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {backgroundColor: theme.dark1},
          headerShadowVisible: false,
          headerTintColor: theme.light,
        }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{
          headerShown: true,
          headerTitle: 'Activities',
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold', fontSize: 18},
          headerStyle: {backgroundColor: theme.dark1},
          headerShadowVisible: false,
          headerTintColor: theme.light,
        }}
      />
      <Stack.Screen
        name="AddActivity"
        component={AddActivity}
        options={{
          headerShown: true,
          headerTitle: 'Add Activity',
          headerTitleStyle: {fontFamily: 'Montserrat-SemiBold', fontSize: 18},
          headerStyle: {backgroundColor: theme.dark1},
          headerShadowVisible: false,
          headerTintColor: theme.light,
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
