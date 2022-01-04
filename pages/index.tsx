import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../layouts/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
