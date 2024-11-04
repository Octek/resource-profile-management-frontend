import { Fragment } from "react";

import { NextApplicationPage } from "~/modules/_core/interfaces/app.interface";
import User from "~/modules/user";

import { AppHead } from "~/core/components/Apphead";
import { labels } from "~/core/utils/labels";

const UserProfile: NextApplicationPage = () => {
  return (
    <Fragment>
      <AppHead title={labels.userPageTitle} />
      <User />
    </Fragment>
  );
};
export default UserProfile;
