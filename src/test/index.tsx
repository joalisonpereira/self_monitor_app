import React, {PropsWithChildren, ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from 'src/styles/theme';
import {NavigationContainer} from '@react-navigation/native';

const AllTheProviders = ({children}: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
