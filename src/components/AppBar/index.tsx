import React from "react";
import { GoBell } from "react-icons/go";
import { Flex, SketchBox as Box } from "@/common/components";
import GoBack from "@/components/GoBack";
import AppLauncher from "@/components/AppLauncher";
import Badge from "@/components/Badge";
import { AvatarPhoto } from "@/components/Avatar";
//
import Styled, { styles } from "./AppBar.module";

const AppBar = ({ stack }: { stack?: string }) => {
  return (
    <Styled.Container className="root-container">
      <Flex.CenterBetween>
        {stack ? (
          <>
            <GoBack />
            <h1>
              <b>{stack}</b>
            </h1>
            <AppLauncher />
          </>
        ) : (
          <>
            <Styled.ContentLeft>
              <Flex.CenterStart as="figure">
                <AvatarPhoto size={35} />
                <figcaption>
                  <small>You're blessed,</small>
                  <b>Gideon, S.</b>
                </figcaption>
              </Flex.CenterStart>
            </Styled.ContentLeft>
            <Styled.ContentRight>
              <GoBell size="1.2em" />
              <Badge value={9} top={-10} right={-8} />
            </Styled.ContentRight>
          </>
        )}
      </Flex.CenterBetween>
    </Styled.Container>
  );
};

export default React.memo(AppBar);
