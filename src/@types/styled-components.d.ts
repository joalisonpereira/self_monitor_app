import 'styled-components/native';
import theme from 'src/styles/theme';

type Theme = typeof theme;

declare module 'styled-components/native' {
  interface DefaultTheme extends Theme {}
}
