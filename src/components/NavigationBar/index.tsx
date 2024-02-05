import {
  GoHome as HomeIcon,
  GoHomeFill as HomeFillIcon,
  GoStar as StarIcon,
  GoStarFill as StarFillIcon,
  GoFileDirectory as FolderIcon,
  GoFileDirectoryFill as FolderFillIcon,
  GoPerson as UserIcon,
  GoPersonFill as UserFillIcon,
  GoPlusCircle as FabIcon,
} from "react-icons/go";
import { React, NavLink, Flex, SketchBox as Box } from "@/common/components";
import FAB from "@/components/FAB";
import usePathway from "@/hooks/usePathway";
//
import PATH from "@/constants/PATH";
import Styled, { styles } from "./NavigationBar.module";

const NavigationBar = () => {
  const { pathname } = usePathway();
  return (
    <Styled.Container className="root-container">
      <Flex.CenterBetween $nowrap $gap={0}>
        {navigationMenu.map((e, i) => (
          <figure key={i}>
            {i === 2 ? (
              <FAB />
            ) : (
              <NavLink to={e.href}>
                {pathname === e.href
                  ? e.icon.solid
                  : e.icon.outline || <Box alt={e.text} />}
                <figcaption>{e.text}</figcaption>
              </NavLink>
            )}
          </figure>
        ))}
      </Flex.CenterBetween>
    </Styled.Container>
  );
};

export default React.memo(NavigationBar);

const navigationMenu = [
  {
    href: PATH.dashboard,
    text: "Home",
    icon: {
      outline: <HomeIcon {...styles.icon} />,
      solid: <HomeFillIcon {...styles.icon} />,
    },
  },
  {
    href: PATH.tent,
    text: "Events",
    icon: {
      outline: <StarIcon {...styles.icon} />,
      solid: <StarFillIcon {...styles.icon} />,
    },
  },
  {
    href: PATH.tent,
    text: "Capture",
    icon: {
      outline: <FabIcon {...styles.icon} />,
      solid: <FabIcon {...styles.icon} />,
    },
  },
  {
    href: PATH.tent,
    text: "Resources",
    icon: {
      outline: <FolderIcon {...styles.icon} />,
      solid: <FolderFillIcon {...styles.icon} />,
    },
  },
  {
    href: PATH.account,
    text: "Profile",
    icon: {
      outline: <UserIcon {...styles.icon} />,
      solid: <UserFillIcon {...styles.icon} />,
    },
  },
];
