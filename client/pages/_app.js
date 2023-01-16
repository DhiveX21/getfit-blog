import "../styles/index.css";
// import "../styles/wordpress.css";
import { client } from "../lib/apollo";
import hydrateRoot from "react-dom/client";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <apolloProvider client={client}>
        <Component {...pageProps} />;
      </apolloProvider>
    </Layout>
  );
}

export default MyApp;
