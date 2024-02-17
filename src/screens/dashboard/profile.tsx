import { TbHomeHeart, TbBrandAsana } from "react-icons/tb";
import { PiGenderIntersexBold } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { MdMoreTime } from "react-icons/md";
import {
  Link,
  Flex,
  Grid,
  Head,
  AppBar,
  SafeAreaView,
  SketchBox as Box,
} from "@/common/components";
import NavigationBar from "@/components/NavigationBar";
import Bavatar from "@/components/Bavatar";
//
import COLOR from "@/constants/COLOR";
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import Styled, { styles } from "@/modules/Profile/Profile.module";
import * as PROFILE from "@/modules/Profile/PROFILE";

const iconProps = { size: "1.2em", color: COLOR.brand };
const ICONS = M.profile
  ? [
      <MdDateRange {...iconProps} />,
      <LuHeartHandshake {...iconProps} />,
      <MdOutlineMarkEmailRead {...iconProps} />,
      <MdOutlinePhoneAndroid {...iconProps} />,
      <MdWorkOutline {...iconProps} />,
    ]
  : [
      <PiGenderIntersexBold {...iconProps} />,
      <MdDateRange {...iconProps} />,
      <LuHeartHandshake {...iconProps} />,
      <MdWorkOutline {...iconProps} />,
      <MdOutlinePhoneAndroid {...iconProps} />,
      <MdOutlineMarkEmailRead {...iconProps} />,
      <LuMapPin {...iconProps} />,
      <MdMoreTime {...iconProps} />,
    ];
const data = M.profile ? PROFILE.mockBiodata : PROFILE.biodata;

export default function ProfileScreen() {
  return (
    <>
      {/* HEADER */}
      <AppBar stack="Profile" />

      {/* MAIN */}
      <SafeAreaView>
        <Styled.Container>
          <Styled.TopSection>
            <Bavatar
              src="/uploads/user-sehiaghe.png"
              size={100}
              bottom={2}
              right={4}
            />
            <h1>Sandra Ehiaghe (Mrs.)</h1>
            <address>
              <TbHomeHeart />
              <p title="House">Favour House</p>
            </address>
            <Link to={PATH.profile_edit}>Edit profile</Link>
          </Styled.TopSection>

          <Styled.BottomSection>
            <ul>
              {data.map((e, i) => (
                <li key={i}>
                  <Flex.Start $gap={20} $nowrap>
                    <i>{ICONS[i]}</i>
                    <div>
                      <p>{e.label}</p>
                      <b>
                        {e.label == "Phone number" ? (
                          <>
                            07066157335, <a title="WhatsApp">+2348169960927</a>
                          </>
                        ) : (
                          e.value
                        )}
                      </b>
                    </div>
                  </Flex.Start>
                </li>
              ))}
            </ul>
          </Styled.BottomSection>
        </Styled.Container>
      </SafeAreaView>

      {/* FOOTER */}
      <NavigationBar />
    </>
  );
}
