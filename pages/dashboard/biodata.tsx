import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import EditProfileModal from "../../components/EditProfileModal";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import UserProfileCard from "../../components/UserProfileCard";
import { redirectLoggedOut } from "../../utils/utils";

const Biodata: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  redirectLoggedOut();
  return (
    <div>
      <Head>
        <title>Biodata | Tabernacle of Psalms</title>
        <meta
          name="description"
          content="Tabernacle of Psalms, Choir Biodata"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveDrawer page="Biodata">
        <UserProfileCard setOpen={setOpen} />
        <EditProfileModal open={open} setOpen={setOpen} />
      </ResponsiveDrawer>
    </div>
  );
};

export default Biodata;
