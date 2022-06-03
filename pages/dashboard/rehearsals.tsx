import type { NextPage } from "next";
import Head from "next/head";
import BasicTabs from "../../components/BasicTab";
import RehearsalsDataTable from "../../components/RehearsalsDataTable";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { createRehearsalData } from "../../utils";
import { redirectLoggedOut } from "../../utils/utils";

const rowsPast = [
  createRehearsalData('Youth Harvest', "28/12/2022", "8:00pm", "12:00am" , true),
  createRehearsalData('Sunday Service', "28/12/2022", "8:00pm", "10:00pm" ,  true),
  createRehearsalData('Bible Study', "28/12/2022", "6:00pm", "8:00pm" ,  false),
];

const rowsOngoing = [
  createRehearsalData('God is good', "20/12/2022", "8:00pm", "11:00pm" ,  false),
];

const labelValues = ["Past", "Ongoing"]
const tabContents = [<RehearsalsDataTable rows={rowsPast} key={0.2}/>, <RehearsalsDataTable rows={rowsOngoing}  key={0.6}/>]
redirectLoggedOut()
const Rehearsals: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rehearsals | Tabernacle of Psalms</title>
        <meta name="description" content="Tabernacle of Psalms, Choir Rehearsals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveDrawer page="Rehearsals">
        <BasicTabs tabContents={tabContents} labelValues={labelValues} />
      </ResponsiveDrawer>
    </div>
  );
};

export default Rehearsals;
 