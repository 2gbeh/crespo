import React from 'react'
import { FcDoughnutChart } from "react-icons/fc";
import {
  Link,
  Flex,
  Grid,
  Head,
  AppBar,
  SafeAreaView,
  SketchBox as Box,
} from "@/common/components";
import Hero from "@/components/_styled/Hero.module";
import NavigationBar from "@/components/NavigationBar";
//
import PATH from "@/constants/PATH";
import Styled, { styles } from "@/modules/Dashboard/Dashboard.module";
import DashboardApps from "@/modules/Dashboard/DashboardApps";

export default function DashboardScreen() {
  return (
    <>
      {/* HEADER */}
      <AppBar title="Dashboard" />

      {/* MAIN */}
      <SafeAreaView $offwhite>
        {/* HERO */}
        <Hero>
          <Styled.HeroLeft>
            <h1>1,509 new members</h1>
            <h2>in the past 30 days</h2>
            <Link to={PATH.splash}>View all</Link>
          </Styled.HeroLeft>
          <Styled.HeroRight>
            <FcDoughnutChart size={"5em"} />
          </Styled.HeroRight>
        </Hero>

        {/* NAV */}
        <DashboardApps />
      </SafeAreaView>

      {/* FOOTER */}
      <NavigationBar />
    </>
  );
}
