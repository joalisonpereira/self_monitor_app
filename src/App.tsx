import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import theme from 'src/styles/theme';
import Routes from 'src/routes';
import {StatusBar} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.dark1} />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
