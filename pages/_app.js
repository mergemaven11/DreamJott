import React from 'react';
import '../styles/globals.css';
// import PropTypes from 'prop-types';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

// myApp.propTypes = {
//   Component: PropTypes.string, //
//   pageProps: PropTypes.string,
// };

export default MyApp;
