import type { NextPage } from "next";
import Head from "next/head";
import BasicTabs from "../../components/BasicTab";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import SongsDataTable from "../../components/SongsDataTable";
import { createSongData } from "../../utils";
import { redirectLoggedOut } from "../../utils/utils";

const rowsSuggested = [
  createSongData(
    "Onyeoma",
    "Nath bassey",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro esse totam recusandae debitis, repudiandae dignissimos illum quae possimus illo fugit sunt itaque ducimus ullam fuga culpa quam quibusdam cumque earum unde quas. Doloremque unde voluptates, sapiente vitae molestiae iusto laboriosam!"
  ),
  createSongData(
    "Thank Baba",
    "Buchi",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro esse totam recusandae debitis, repudiandae dignissimos illum quae possimus illo fugit sunt itaque ducimus ullam fuga culpa quam quibusdam cumque earum unde quas. Doloremque unde voluptates, sapiente vitae molestiae iusto laboriosam!"
  ),
  createSongData(
    "I love Jesus",
    "Ajibola",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro esse totam recusandae debitis, repudiandae dignissimos illum quae possimus illo fugit sunt itaque ducimus ullam fuga culpa quam quibusdam cumque earum unde quas. Doloremque unde voluptates, sapiente vitae molestiae iusto laboriosam!"
  ),
];

const rowsUpcoming = [
  createSongData(
    "God is good",
    "Grace",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro esse totam recusandae debitis, repudiandae dignissimos illum quae possimus illo fugit sunt itaque ducimus ullam fuga culpa quam quibusdam cumque earum unde quas. Doloremque unde voluptates, sapiente vitae molestiae iusto laboriosam!"
  ),
];

const rowsConcert = [
  createSongData(
    "Narekele",
    "Tim Godfrey",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro esse totam recusandae debitis, repudiandae dignissimos illum quae possimus illo fugit sunt itaque ducimus ullam fuga culpa quam quibusdam cumque earum unde quas. Doloremque unde voluptates, sapiente vitae molestiae iusto laboriosam!"
  ),
  createSongData(
    "Intentiona;",
    "Travis Greene",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro esse totam recusandae debitis, repudiandae dignissimos illum quae possimus illo fugit sunt itaque ducimus ullam fuga culpa quam quibusdam cumque earum unde quas. Doloremque unde voluptates, sapiente vitae molestiae iusto laboriosam!"
  ),
];

const labelValues = ["Suggested", "Upcoming", "Concert"];
const tabContents = [
  <SongsDataTable rows={rowsSuggested} key={0.2} />,
  <SongsDataTable rows={rowsUpcoming} key={0.6} />,
  <SongsDataTable rows={rowsConcert} key={0.8} />,
];

const Songs: NextPage = () => {
  redirectLoggedOut();
  return (
    <div>
      <Head>
        <title>Songs | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveDrawer page="Songs">
        <BasicTabs tabContents={tabContents} labelValues={labelValues} />
      </ResponsiveDrawer>
    </div>
  );
};

export default Songs;
