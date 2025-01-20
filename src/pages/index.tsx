import Head from "next/head";
import { Layout } from "components";

const Home: React.FC = () => {
  return (
    <div className="is-white">
      <Head>
        <title>Vendas App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
  
     
    </div>
  );
};

export default Home;
