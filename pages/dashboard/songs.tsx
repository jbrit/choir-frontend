import type { NextPage } from "next";
import Head from "next/head";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";

const Songs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Songs | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveDrawer page="Songs">
        Testing
      </ResponsiveDrawer>
    </div>
  );
};

export default Songs;
 