import React from 'react'
import {
  FcComboChart as FinancesIcon,
  FcBusinessman as PastorsIcon,
  FcCustomerSupport as WorkersIcon,
  FcFlowChart as DepartmentsIcon,
  FcHome as HousesIcon,
  FcConferenceCall as MembersIcon,
  FcCalendar as BirthdaysIcon,
  FcLike as WeddingsIcon,
  FcMindMap as VendorsIcon,
  // FcAdvertising as VendorsIcon,
  // FcShop  as VendorsIcon,
} from "react-icons/fc";
import {
  Link,
  Grid,
  SketchBox as Box,
  Repeat,
} from "@/common/components";
import Badge from "@/components/Badge";
import GridContainer, { GridItem } from "@/components/GridContainer";
//
import PATH from "@/constants/PATH";
import Styled, { styles } from "./DashboardApps.module";

const DashboardApps = () => {
  return (
    <Styled.Container>
      <GridContainer>
        {apps.map((e, i) => (
          <GridItem key={i} flex>
            <Styled.Link to={e.href} className={i === 8 ? `relative` : ``}>
              {e.icon || <Box as={[1, 32, e.text]} />}
              <small>{e.text}</small>

              {/* BADGE */}
              {i === 8 && <Badge alt top={20} right={-15} />}
            </Styled.Link>
          </GridItem>
        ))}
      </GridContainer>
    </Styled.Container>
  );
};

export default React.memo(DashboardApps);

const apps = [
  {
    href: PATH.tent,
    text: "Pastors",
    icon: <PastorsIcon size="2em" />,
  },
  {
    href: PATH.tent,
    text: "Workers",
    icon: <WorkersIcon size="2em" />,
  },
  {
    href: PATH.tent,
    text: "Members",
    icon: <MembersIcon size="2em" />,
  },
  {
    href: PATH.tent,
    text: "Houses",
    icon: <HousesIcon size="2em" />,
  },
  {
    href: PATH.tent,
    text: "Departments",
    icon: <DepartmentsIcon size="2em" />,
  },
  {
    href: PATH.finances,
    text: "Finances",
    icon: <FinancesIcon size="2em" />,
  },
  {
    href: PATH.tent,
    text: "Birthdays",
    icon: <BirthdaysIcon size="2em" />,
  },
  {
    href: PATH.tent,
    text: "Weddings",
    icon: <WeddingsIcon size="2em" />,
  },
  {
    href: PATH.tent,
    // text: "Exo 35:10",
    text: "#Connect",
    icon: <VendorsIcon size="2em" />,
  },
  // {
  //   href: PATH.tent,
  //   text: "Birthdays",
  //   icon: <BirthdaysIcon size="2em" />,
  // },
  // {
  //   href: PATH.tent,
  //   text: "Weddings",
  //   icon: <WeddingsIcon size="2em" />,
  // },
  // {
  //   href: PATH.tent,
  //   // text: "Exo 35:10",
  //   text: "#Connect",
  //   icon: <VendorsIcon size="2em" />,
  // },
];
