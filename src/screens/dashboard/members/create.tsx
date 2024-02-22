import React from "react";
import { FaChevronRight as NextIcon } from "react-icons/fa";
import {
  Link,
  Flex,
  Grid,
  Head,
  AppBar,
  SafeAreaView,
  SketchBox as Box,
} from "@/common/components";
import AvatarPhoto from "@/components/Avatar/Photo";
import {
  FormFieldset,
  FormInput,
  FormSelect,
  FormButton,
} from "@/components/Form";
//
import COLOR from "@/constants/COLOR";
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import { ETitle, EGender, EMaritalStatus } from "@/constants/enums/Person";
import { EEntity, EHouse, EDepartment } from "@/constants/enums/App";
import EnumHelper from "@/utils/helpers/EnumHelper";
import Styled, { styles } from "@/modules/Profile/Profile.module";
import fakerHelper, { FakerHelper } from "@/lib/faker-js";

export default function CreateMemberScreen() {
  const [submitting, setSubmitting] = React.useState(false);

  // fakerHelper.log(fakerHelper.getPeople);
  return (
    <>
      {/* HEADER */}
      <AppBar stack="Data Capture" />

      {/* MAIN */}
      <SafeAreaView>
        <Styled.Container>
          <Flex.CenterCenter>
            <AvatarPhoto src={"/images/camera-alt.png"} size={80} />
          </Flex.CenterCenter>

          <FormFieldset
            // onSubmit={handleSubmit}
            autoComplete="on"
            disabled={submitting}
          >
            {!M.members_create && (
              <>
                {/* CATEGORY */}
                <FormSelect
                  label="Category*"
                  id="entity"
                  name="entity"
                  required
                  options={EnumHelper.asOptions(EEntity)}
                />
                {/* TITLE */}
                <FormSelect
                  label="Title"
                  id="title"
                  name="title"
                  options={EnumHelper.asOptions(ETitle)}
                />
              </>
            )}
            {/* SURNAME + OTHER NAMES */}
            <Flex.CenterBetween $nowrap>
              <div className="">
                <FormInput
                  label="Surname*"
                  type="search"
                  id="surname"
                  name="surname"
                  required
                />
              </div>
              <div className="min-w-[60%]">
                <FormInput
                  label="Other Names*"
                  type="search"
                  id="other_names"
                  name="other_names"
                  required
                />
              </div>
            </Flex.CenterBetween>
            {/* SEX + BIRTH DATE */}
            <Flex.CenterBetween $nowrap>
              <div className="flex-1">
                <FormSelect
                  label="Gender"
                  id="sex"
                  name="sex"
                  options={EnumHelper.asOptions(EGender)}
                />
              </div>
              <div className="min-w-[50%]">
                <FormInput
                  label="Date of Birth"
                  type="date"
                  id="dob"
                  name="dob"
                  placeholder="Surname first"
                />
              </div>
            </Flex.CenterBetween>
            {/* MARITAL STATUS + ANNIVERSARY */}
            <Flex.CenterBetween $nowrap>
              <div className="flex-1">
                <FormSelect
                  label="Marital Status"
                  id="marital_status"
                  name="marital_status"
                  options={EnumHelper.asOptions(EMaritalStatus)}
                />
              </div>
              <div className="min-w-[50%]">
                <FormInput
                  label="Wedding Anniversary"
                  type="date"
                  id="anniversary"
                  name="anniversary"
                />
              </div>
            </Flex.CenterBetween>
            {!M.members_create && (
              <>
                {/* PHONE NUMBERS */}
                <Flex.CenterBetween $nowrap>
                  <div className="">
                    <FormInput
                      label="Phone Number*"
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>
                  <div className="">
                    <FormInput
                      label="WhatsApp Number"
                      type="tel"
                      id="mobile"
                      name="mobile"
                    />
                  </div>
                </Flex.CenterBetween>
              </>
            )}

            {!M.members_create && (
              <>
                {/* EMAIL */}
                <FormInput
                  label="Email Address"
                  type="email"
                  id="email"
                  name="email"
                />
                {/* ADDRESS */}
                <FormInput
                  label="Home Address"
                  type="text"
                  id="address"
                  name="address"
                />{" "}
              </>
            )}
            {/* OCCUPATION */}
            <FormInput
              label="Occupation"
              type="search"
              id="occupation"
              name="occupation"
            />
            {/* HOUSE + DEPT */}
            <Flex.CenterBetween $nowrap>
              <div className="flex-1">
                <FormSelect
                  label="House"
                  id="house"
                  name="house"
                  options={EnumHelper.asOptions(EHouse)}
                />
              </div>
              <div className="flex-1">
                <FormSelect
                  label="Department"
                  id="department"
                  name="department"
                  options={EnumHelper.asOptions(EDepartment)}
                />
              </div>
            </Flex.CenterBetween>
            {!M.members_create && (
              <>
                {/* JOINED */}
                <FormInput
                  label="Membership Date"
                  type="date"
                  id="joined"
                  name="joined"
                />
              </>
            )}

            <div className="mt-4 text-center">
              {/* BUTTON */}
              <FormButton text="Save" disabled={submitting} />

              {/*  */}
              <Link
                to={PATH.members}
                className="mt-4 text-brand text-sm flex items-center justify-center gap-2 font-medium"
              >
                Members
                <NextIcon size="1em" />
              </Link>
            </div>
          </FormFieldset>
        </Styled.Container>
      </SafeAreaView>
    </>
  );
}
