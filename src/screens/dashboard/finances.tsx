import {
  Link,
  Flex,
  Grid,
  AppBar,
  SafeAreaView,
  Head,
  SketchBox as Box,
} from "@/common/components";

export default function FinancesScreen() {
  return (
    <>
      {/* HEADER */}
      <AppBar stack="Finances" />

      {/* MAIN */}
      <SafeAreaView $offwhite>FinancesScreen</SafeAreaView>
    </>
  );
}
