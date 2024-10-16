"use client"; // This is necessary to indicate the file is a client-side component
import { Fragment } from "react";
import { AppHead } from "~/core/components/Apphead";
import { NextApplicationPage } from "~/modules/_core/interfaces/app.interface";
import ContactUs from "~/modules/components/contactUs/index";
import { labels } from "~/core/utils/labels";

const ContacUsPage: NextApplicationPage = () => {

  return (
    <Fragment>
      <AppHead title={labels.contactUsTitle} />
    <ContactUs/>
    </Fragment>

  );
};

export default ContacUsPage;
