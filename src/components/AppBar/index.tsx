import React from "react";
import { GoBell } from "react-icons/go";
import { FaChevronLeft as BackIcon } from "react-icons/fa";
import { CgMenuGridO as GridIcon } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
//
import { Flex, SketchBox as Box } from "@/common/components";
import Head from "../Head";
import { AvatarPhoto } from "../Avatar";
import Badge from "../Badge";
import Drawer from "../Drawer";
import AppLauncher from "../AppLauncher";
//
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import Styled, { styles } from "./AppBar.module";

const AppBar = ({ title, stack }: { title?: string; stack?: string }) => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = React.useState(Boolean(M.drawer));
  const [showAppLauncher, setShowAppLauncher] = React.useState(
    Boolean(M.app_launcher)
  );
  //
  return (
    <>
      {/* HEAD */}
      <Head title={title || stack} />

      {/* HEADER */}
      <Styled.Container className="root-container">
        <Flex.CenterBetween>
          {stack ? (
            <>
              <button onClick={() => navigate(-1)} title="Back">
                <BackIcon size="1em" />
              </button>
              <h1>
                <b>{stack}</b>
              </h1>
              <button onClick={() => setShowAppLauncher(true)} title="Apps">
                <GridIcon {...styles.icon} />
              </button>
            </>
          ) : (
            <>
              <Styled.ContentLeft>
                <Flex.CenterStart as="figure">
                  <button onClick={() => setShowDrawer(true)} title="Drawer">
                    <AvatarPhoto size={35} />
                  </button>
                  <figcaption>
                    <small>You're blessed,</small>
                    <b>Sandra, E.</b>
                  </figcaption>
                </Flex.CenterStart>
              </Styled.ContentLeft>
              <Styled.ContentRight
                onClick={() => navigate(PATH.notifications)}
                title="Notifications"
              >
                <GoBell size="1.2em" />
                <Badge value={9} top={-10} right={-8} />
              </Styled.ContentRight>
            </>
          )}
        </Flex.CenterBetween>
      </Styled.Container>

      {/* DRAWER */}
      {showDrawer && (
        <Drawer show={showDrawer} onClose={() => setShowDrawer(false)} />
      )}

      {/* BOTTOM SHEET */}
      {showAppLauncher && (
        <AppLauncher
          show={showAppLauncher}
          onClose={() => setShowAppLauncher(false)}
        />
      )}
    </>
  );
};

export default React.memo(AppBar);
