import "../styles/globals.css";
import Layout from "../components/Layout";
import NextProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextProgress color="tomato" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
