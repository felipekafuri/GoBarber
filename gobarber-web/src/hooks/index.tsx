import React, { Children } from 'react';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';
import ToastContainer from '../components/ToastContainer';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AppProvider>
        <ToastProvider>{children}</ToastProvider>
        <ToastContainer />
      </AppProvider>
    </>
  );
};

export default AppProvider;
