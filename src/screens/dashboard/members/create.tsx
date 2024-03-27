import {
  Flex,
  AppBar,
  SafeAreaView,
  SketchBox as Box,
} from "@/common/components";
import AvatarPhoto from "@/components/Avatar/Photo";
import FormLayout from "@/components/Form/FormLayout";
//
import {
  _Category,
  _FullName,
  _Gender,
  _AgeGroup,
  _BirthDay,
  _BirthMonth,
  _MaritalStatus,
  _Anniversary,
  _Phone,
  _Mobile,
  _Email,
  _Address,
  _Occupation,
  _House,
  _Department,
  _Joined,
  _Wrapper,
} from "@/modules/Members/CreateMember/ui";
import useCreateMember from "@/modules/Members/CreateMember/useCreateMember";
import Styled, {
  styles,
} from "@/modules/Members/CreateMember/CreateMember.module";

export default function CreateMemberScreen() {
  const { M, register, handleSubmit, errors, isSubmitting, handledSubmit } =
    useCreateMember();
  //
  return (
    <>
      {/* HEADER */}
      <AppBar stack="Data Capture" />

      {/* MAIN */}
      <SafeAreaView>
        <Styled.Container>
          {/* AVATAR */}
          <Flex.CenterCenter>
            <AvatarPhoto src={"/images/camera.png"} size={80} />
          </Flex.CenterCenter>

          {/* FORM */}
          <_Wrapper self={{ M, handleSubmit, handledSubmit, isSubmitting }}>
            {/* CATEGORY */}
            <_Category self={{ M, register, errors }} />

            {/* SURNAME & OTHER NAMES */}
            <_FullName self={{ M, register, errors }} />

            {/* GENDER & AGE GROUP */}
            <FormLayout>
              <_Gender self={{ M, register, errors }} />
              <_AgeGroup self={{ M, register, errors }} />
            </FormLayout>

            {/* BIRTH DAY & MONTH */}
            <FormLayout>
              <_BirthDay self={{ M, register, errors }} />
              <_BirthMonth self={{ M, register, errors }} />
            </FormLayout>

            {/* MARITAL STATUS & ANNIVERSARY */}
            <FormLayout>
              <_MaritalStatus self={{ M, register, errors }} />
              <_Anniversary self={{ M, register, errors }} />
            </FormLayout>

            {/* PHONE & WHATSAPP NUMBER */}
            <FormLayout>
              <_Phone self={{ M, register, errors }} />
              <_Mobile self={{ M, register, errors }} />
            </FormLayout>

            {/* EMAIL */}
            <_Email self={{ M, register, errors }} />

            {/* ADDRESS */}
            <_Address self={{ M, register, errors }} />

            {/* OCCUPATION */}
            <_Occupation self={{ M, register, errors }} />

            {/* HOUSE & DEPT */}
            <FormLayout>
              <_House self={{ M, register, errors }} />
              <_Department self={{ M, register, errors }} />
            </FormLayout>

            {/* JOINED */}
            <_Joined self={{ M, register, errors }} />
          </_Wrapper>
        </Styled.Container>
      </SafeAreaView>
    </>
  );
}
