import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
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
  FcAdvertising as EventsIcon,
  FcPlus as CaptureIcon,
  FcOpenedFolder as ResourcesIcon,
} from "react-icons/fc";
import {
  Link,
  Flex,
  Grid,
  SketchBox as Box,
  Repeat,
} from "@/common/components";
import Badge from "@/components/Badge";
import GridContainer, { GridItem } from "@/components/GridContainer";
//
import PATH from "@/constants/PATH";
import Styled, { styles } from "./AppLauncher.module";

const AppLauncher = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <Offcanvas show={show} onHide={onClose} backdrop placement="bottom">
      <Styled.Container>
        {/* KNOB */}
        <strong>&nbsp;</strong>

        {/* GRID */}
        <Grid.CenterEvenly $cols={4} $gap={12}>
          {apps.map((e, i) => (
            <Link key={i} to={e.href}>
              <Flex.CenterCenter $cross>
                {e.icon}
                <small>{e.text}</small>
              </Flex.CenterCenter>
            </Link>
          ))}
        </Grid.CenterEvenly>
      </Styled.Container>
    </Offcanvas>
  );
};

export default React.memo(AppLauncher);

const apps = [
  {
    href: PATH.tent,
    text: "Capture",
    icon: <CaptureIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Pastors",
    icon: <PastorsIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Workers",
    icon: <WorkersIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Members",
    icon: <MembersIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Houses",
    icon: <HousesIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Departments",
    icon: <DepartmentsIcon size="1.5em" />,
  },
  {
    href: PATH.finances,
    text: "Finances",
    icon: <FinancesIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Birthdays",
    icon: <BirthdaysIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Weddings",
    icon: <WeddingsIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    // text: "Exo 35:10",
    text: "#Connect",
    icon: <VendorsIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Events",
    icon: <EventsIcon size="1.5em" />,
  },
  {
    href: PATH.tent,
    text: "Resources",
    icon: <ResourcesIcon size="1.5em" />,
  },
];
