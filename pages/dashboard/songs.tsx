import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import { getSongs } from "../../actions/songs";
import BasicTabs from "../../components/BasicTab";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import SongsDataTable from "../../components/SongsDataTable";
import { createSongsData } from "../../utils";
import { redirectLoggedOut } from "../../utils/utils";

const Songs: NextPage = () => {
  redirectLoggedOut();
  const songQuery = useQuery("songs", getSongs);
  const labelValues = ["Concert", "Upcoming", "Suggested"];
  const tabContents = [
    <SongsDataTable rows={createSongsData(songQuery.data, "Concert")} key={0.2} />,
    <SongsDataTable rows={createSongsData(songQuery.data, "Upcoming")} key={0.6} />,
    <SongsDataTable rows={createSongsData(songQuery.data, "Suggested")} key={0.8} />,
  ];
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
