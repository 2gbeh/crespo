import React from "react";
import { Helmet } from "react-helmet";
//
import APP from "@/constants/APP";
import { __ } from "@/utils";
// const { __ } = require("@/utils");


const Head = ({ title = "Log in" }: { title?: string }) => {
  return (
    <>
      <Helmet>
        <title>{__(APP.title.replace("%", title))}</title>
      </Helmet>
    </>
  );
};

export default React.memo(Head);
