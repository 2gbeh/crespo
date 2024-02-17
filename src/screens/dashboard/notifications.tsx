import {
  FcCalendar as BirthdaysIcon,
  FcLike as WeddingsIcon,
  FcAdvertising as VendorsIcon,
} from "react-icons/fc";
import {
  Link,
  Flex,
  Grid,
  Border,
  Head,
  AppBar,
  SafeAreaView,
  SketchBox as Box,
} from "@/common/components";
//
import COLOR from "@/constants/COLOR";
import { wrap } from "@/utils";
import date from "@/utils/phpDateFormat";
import Styled, { styles } from "@/modules/Notifications/Notifications.module";
import mockData from "@/data/notifications";

export default function NotificationsScreen() {
  return (
    <>
      {/* HEADER */}
      <AppBar stack="Notifications" />

      {/* MAIN */}
      <SafeAreaView>
        <Styled.Label>This week</Styled.Label>
        <Styled.List>
          {mockData.slice(0, 3).map((e, i) => (
            <Flex.Between key={i} as="li" $gap={0} $nowrap>
              <Flex.Start $nowrap>
                <Border $size={32} $color={COLOR.brand_tint}>
                  {
                    [<BirthdaysIcon />, <WeddingsIcon />, <VendorsIcon />][
                      Number(e.status)
                    ]
                  }
                </Border>
                <hgroup>
                  <h2>
                    {
                      ["Birthday Wishes", "Wedding Bells", "Upcoming Event"][
                        Number(e.status)
                      ]
                    }
                  </h2>
                  <p>{wrap(e.summary, 75)}</p>
                </hgroup>
              </Flex.Start>
              <time>{date(e.created_at, "M j")}</time>
            </Flex.Between>
          ))}
        </Styled.List>
        <Styled.Label>Next week</Styled.Label>
        <Styled.List>
          {mockData.slice(-2).map((e, i) => (
            <Flex.Between key={i} as="li" $gap={0} $nowrap>
              <Flex.Start $nowrap>
                <Border $size={32} $color={COLOR.brand_tint}>
                  {
                    [<BirthdaysIcon />, <WeddingsIcon />, <VendorsIcon />][
                      Number(e.status)
                    ]
                  }
                </Border>
                <hgroup>
                  <h2>
                    {
                      ["Birthday Wishes", "Wedding Bells", "Upcoming Event"][
                        Number(e.status)
                      ]
                    }
                  </h2>
                  <p>{wrap(e.summary, 75)}</p>
                </hgroup>
              </Flex.Start>
              <time>{date(e.created_at, "M j")}</time>
            </Flex.Between>
          ))}
        </Styled.List>
      </SafeAreaView>
    </>
  );
}
