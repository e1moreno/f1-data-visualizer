import React, { ElementType } from 'react';

interface MyAppProps {
  Component: ElementType;
  pageProps?: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
