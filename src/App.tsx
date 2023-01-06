import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import theme from 'src/styles/theme';
import Routes from 'src/routes';
import {StatusBar} from 'react-native';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.dark1} />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
