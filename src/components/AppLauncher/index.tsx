import React from "react";
import { CgMenuGridO as GridIcon } from "react-icons/cg";
//
import { bool } from "@/utils";
import Styled, { styles } from "./AppLauncher.module";

const AppLauncher = () => {
  const [showApps, setShowApps] = React.useState(false);
  //
  return (
    <Styled.Container onClick={() => setShowApps(true)}>
      <GridIcon {...styles.icon} />
    </Styled.Container>
  );
};

export default React.memo(AppLauncher);
