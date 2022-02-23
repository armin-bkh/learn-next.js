import Head from "next/head";
import Layout from "../Layout/Layout";
import "../styles/globals.css";
import "../styles/layout.css";

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return (
    <>
    <Head>
      <title>Learn Next.js</title>
      <meta name="description" content="advanced " />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
