import { TbHomeHeart, TbBrandAsana } from "react-icons/tb";
import {
  Link,
  Flex,
  Grid,
  AppBar,
  SafeAreaView,
  Head,
  Repeat as Rx,
  SketchBox as Box,
} from "@/common/components";
import AvatarSolid from "@/components/Avatar/Solid";
import Search from "@/components/Search";
//
import fakeMembers from "@/data/members";
import MemberPipe from "@/utils/pipes/Member.pipe";
import { wrap } from "@/utils";

export default function MembersScreen() {
  // console.log(
  //   EnumHelper.keyOf(ETitle, "3"),
  //   EnumHelper.keyOf(EDepartment, "ict"),
  //   EnumHelper.valueOf(EDepartment, "ict")
  // );
  //
  return (
    <>
      <AppBar stack="Members" />
      <SafeAreaView $padding={20}>
        {/* SEARCH */}
        <div className="mt-3">
          <Search handleChange={null} />
        </div>

        {/* TOP */}
        <section className="mt-3 text-sm font-medium">Recently added</section>
        <div className="flex gap-2.5 py-2 overflow-auto">
          {fakeMembers.slice(0, 10).map((e, i) => (
            <figure className="bg-red-100_  flex flex-col items-center min-w-12">
              <AvatarSolid key={i} text={MemberPipe.intials(e)} size={40} />
              <figcaption className="text-xs mt-1 text-clip">
                {wrap(e.surname, 8)}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* ALL */}
        <section className="mt-3 text-sm font-semibold">All members</section>
        <div className="flex flex-col gap-3 my-2 overflow-auto">
          {fakeMembers.slice(10).map((e, i) => (
            <figure className="flex items-center gap-2.5">
              <AvatarSolid key={i} text={MemberPipe.intials(e)} size={40} />
              <figcaption className="flex-1">
                <h1 className="text-sm_">
                  {MemberPipe.fullName(e)}
                  {MemberPipe.title(e)}
                </h1>
                <p className="mt-0.5 text-xs text-gray-500 flex justify-between ">
                  <span>{MemberPipe.tel(e)}</span>
                  <span className="flex items-center gap-1 text-brand_blue">
                    <TbHomeHeart />
                    {MemberPipe.house(e)}
                  </span>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </SafeAreaView>
    </>
  );
}
