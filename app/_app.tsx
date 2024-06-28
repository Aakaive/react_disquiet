import React from 'react';
import { AppProps } from 'next/app';
import { DataProvider } from '../context/DataContext';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
};

export default MyApp;
