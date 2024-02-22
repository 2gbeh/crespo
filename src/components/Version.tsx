import React from "react";
import APP from "@/constants/APP";

const Version = () => {
  return (
    <address
      style={{
        padding: "40px 0",
        textAlign: "center",
        textShadow: "0px 2px 1px #fff",
        fontSize: 14,
        fontStyle: "normal",
        display: "block",
      }}
    >
      v{APP.version}
    </address>
  );
};

export default React.memo(Version);
