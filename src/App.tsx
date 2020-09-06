import React, { lazy, Suspense } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const Main = lazy(() => import('./pages/Main'));

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
  </ThemeProvider>
);

export default App;
