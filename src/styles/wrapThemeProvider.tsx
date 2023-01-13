import {ThemeProvider} from 'styled-components/native';
import theme from './theme';

function renderThemeProvider(children: React.ReactNode) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default renderThemeProvider;
