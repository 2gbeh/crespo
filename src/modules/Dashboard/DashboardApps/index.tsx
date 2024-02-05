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
import { React, Link, Grid, SketchBox as Box } from "@/common/components";
import Badge from "@/components/Badge";
//
import PATH from "@/constants/PATH";
import Styled, { styles } from "./DashboardApps.module";

const DashboardApps = () => {
  return (
    <Styled.Container>
      <Grid.CenterEvenly $gap={20}>
        {apps.map((e, i) => (
          <figure key={i}>
            <Link to={e.href} className={i === 8 ? `relative` : ``}>
              {e.icon || <Box as={[1, 32, ""]} />}
              <figcaption>{e.text}</figcaption>

              {i === 8 && <Badge alt top={20} right={-15} />}
            </Link>
          </figure>
        ))}
      </Grid.CenterEvenly>
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
    // text: <>Olympian&trade;</>,
    text: "Exo 35:10",
    icon: <VendorsIcon size="2em" />,
  },
];
