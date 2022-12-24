import "../styles/index.css";
// import "../styles/wordpress.css";
import { client } from "../lib/apollo";
import hydrateRoot from "react-dom/client";

function MyApp({ Component, pageProps }) {
  return (
    <apolloProvider client={client}>
      <Component {...pageProps} />;
    </apolloProvider>
  );
}

export default MyApp;
