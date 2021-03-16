import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      app
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
