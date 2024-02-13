import React from "react";
import {
  TbHomeHeart,
  TbActivityHeartbeat,
  TbUser,
  TbUserShield,
  TbLock,
  TbHelpTriangle,
  TbSettings,
} from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import {
  Link,
  NavLink,
  Flex,
  Grid,
  Border,
  Head,
  AppBar,
  SafeAreaView,
  SketchBox as Box,
} from "@/common/components";
import Offcanvas from "react-bootstrap/Offcanvas";
import Bavatar from "@/components/Bavatar";
//
import APP from "@/constants/APP";
import PATH from "@/constants/PATH";
import Styled, { styles } from "./Drawer.module";

const ICONS = [
  <TbUser />,
  <TbActivityHeartbeat />,
  <TbUserShield />,
  <TbLock />,
  <TbHelpTriangle />,
  <TbSettings />,
];

const Drawer = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  return (
    <Offcanvas show={show} onHide={onClose} backdrop>
      <Styled.Hero>
        <Border $size={85} $color={"#873e7b"}>
          <Bavatar
            src="/uploads/user-sehiaghe.png"
            size={75}
            outline={false}
            bottom={2}
            right={-4}
          />
        </Border>
        <h1>Sandra Ehiaghe (Mrs.)</h1>
        <small>
          <TbHomeHeart />
          <span title="House">Favour House</span>
        </small>
      </Styled.Hero>

      <Styled.Menu>
        {[
          "My Account",
          "Activities",
          "Administrators",
          "Roles & Permissions",
          "Tech Support",
          "Settings",
        ].map((e, i) => (
          <NavLink key={i} to={i < 1 ? PATH.profile : PATH.tent}>
            <Flex.Between>
              <Flex.CenterStart $gap={20}>
                {ICONS[i]}
                <p>{e}</p>
              </Flex.CenterStart>

              {/* PILL */}
              {i === 2 && <i>15</i>}
              {i === 3 && <em>New</em>}
            </Flex.Between>
          </NavLink>
        ))}
      </Styled.Menu>

      <Styled.Divide />

      <Styled.Footer>
        <Flex.CenterBetween>
          <button onClick={onClose}>
            <VscSignOut size={"1.2em"} />
            Sign out
          </button>
          <small title={APP.build}>v{APP.version}</small>
        </Flex.CenterBetween>
      </Styled.Footer>
    </Offcanvas>
  );
};

export default React.memo(Drawer);
