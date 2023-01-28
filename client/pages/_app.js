import "../styles/index.css";
// import "../styles/wordpress.css";
import { client } from "../lib/apollo";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <apolloProvider client={client} style={{width : '100%'}}>
        <Component {...pageProps} />;
      </apolloProvider>
    </Layout>
  );
}

export default MyApp;
