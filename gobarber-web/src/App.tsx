import React from 'react';

import SingIn from './pages/SignIn';
import SingUp from './pages/SignUp';
import GlobalStyles from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SingIn />
      </AppProvider>

      <GlobalStyles />
    </>
  );
};

export default App;
