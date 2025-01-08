// src/pages/_app.js

import "../../src/styles/globals.css"; // Import global CSS if needed

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
