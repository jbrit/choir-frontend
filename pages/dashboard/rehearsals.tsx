import type { NextPage } from "next";
import Head from "next/head";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";

const Rehearsals: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rehearsals | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Rehearsals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveDrawer page="Rehearsals">
        Testing
      </ResponsiveDrawer>
    </div>
  );
};

export default Rehearsals;
 