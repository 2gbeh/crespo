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
import GridContainer, { GridItem } from "@/components/GridContainer";
//
import PATH from "@/constants/PATH";
import Styled, { styles } from "@/modules/Finances/Finances.module";

export default function FinancesScreen() {
  return (
    <>
      <Head title="Finances" />

      {/* HEADER */}
      <AppBar stack="Finances" />

      {/* MAIN */}
      <SafeAreaView $offwhite>
        {/* HERO */}
        <Hero $centered>
          <Styled.HeroLeft>
            <h1>1,509 new members</h1>
            <h2>in the past 30 days</h2>
            <Link to={PATH.tent}>View all</Link>
          </Styled.HeroLeft>
          <Styled.HeroRight>
            {/* <FcDoughnutChart size={"5em"} /> */}
          </Styled.HeroRight>
        </Hero>

        <GridContainer>
          {[
            "Offering",
            "Tithe",
            "Thankgiving",
            "First Fruit",
            "Welfare",
            "Widows",
            "Projects",
            "Donations",
            "Misc",
          ].map((e, i) => (
            <GridItem key={i} show flex>
              <Link to={PATH.tent}>
                <Box />
                <p>
                  <b>{i + 1},000,000</b>
                </p>
                <small>{e}</small>
              </Link>
            </GridItem>
          ))}
        </GridContainer>
      </SafeAreaView>
    </>
  );
}
