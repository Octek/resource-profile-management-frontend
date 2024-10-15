import { Fragment } from "react";

import { NextApplicationPage } from "~/modules/_core/interfaces/app.interface";
import { AppHead } from "~/core/components/Apphead";
import { labels } from "~/core/utils/labels";

const FirstPage: NextApplicationPage = () => {
  return (
    <Fragment>
      <AppHead title={labels.firstPageTitle} />
      <h1>{labels.firstPageTitle}</h1>
    </Fragment>
  );
};
export default FirstPage;
