import { Fragment } from "react";
import { labels } from "~/modules/dashboard/utils/labels";

export default function Dashboard() {
  return (
    <Fragment>
      <h1>{labels.dashboard}</h1>
    </Fragment>
  );
}
