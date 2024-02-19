import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TbHomeHeart,
  TbActivityHeartbeat,
  TbUser,
  TbUserShield,
  TbHome2,
  TbUsers,
  TbPigMoney,
  TbHelpTriangle,
  TbSettings,
  TbFolderOpen,
  TbSpeakerphone,
  TbSparkles,
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
  <TbHome2 />,
  <TbUsers />,
  <TbPigMoney />,
  <TbSparkles />,
  <TbFolderOpen />,
];
const ICONS_II = [<TbHelpTriangle />, <TbSettings />, <TbUserShield />];

const Drawer = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const navigate = useNavigate();
  //
  return (
    <Offcanvas show={show} onHide={onClose} backdrop>
      <Styled.Hero onClick={onClose}>
        <Border $size={85} $color={"#873e7b"}>
          <Bavatar
            src="/uploads/user-sehiaghe.png"
            size={75}
            outline={false}
            bottom={2}
            right={-4}
            alt
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
          { href: PATH.dashboard, text: "Home" },
          { href: PATH.members, text: "Members" },
          { href: PATH.finances, text: "Finances" },
          { href: null, text: "Events" },
          { href: null, text: "Resources" },
        ].map((e, i) => (
          <NavLink key={i} to={e.href || PATH.tent}>
            <Flex.Between>
              <Flex.CenterStart $gap={20}>
                {ICONS[i]}
                <p>{e.text}</p>
              </Flex.CenterStart>

              {/* PILL */}
              {i === 1 && <i>15</i>}
              {i === 2 && <em>New</em>}
            </Flex.Between>
          </NavLink>
        ))}
      </Styled.Menu>

      <Styled.Divide />

      <Styled.Menu>
        {[
          { href: null, text: "Tech Support" },
          { href: null, text: "Settings" },
          { href: null, text: "Administrator" },
        ].map((e, i) => (
          <NavLink key={i} to={e.href || PATH.tent}>
            <Flex.Between>
              <Flex.CenterStart $gap={20}>
                {ICONS_II[i]}
                <p>{e.text}</p>
              </Flex.CenterStart>
            </Flex.Between>
          </NavLink>
        ))}
      </Styled.Menu>

      <Styled.Footer>
        <Flex.CenterBetween>
          <button onClick={() => navigate(PATH.login)}>
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
