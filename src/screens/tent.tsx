import {
  AppBar,
  SafeAreaView,
} from "@/common/components";
import NavigationBar from "@/components/NavigationBar";
//
import Styled, { styles } from "@/modules/Tent/Tent.module";

export default function TentScreen() {
  return (
    <>
      {/* HEADER */}
      <AppBar stack="Under Construction" />

      {/* MAIN */}
      <SafeAreaView $offwhite>
        <Styled.Container>
          <figure>
            <img src="/images/under-construction.png" alt="" />
            <figcaption>Sorry, this screen is currently unavailable until future version updates!</figcaption>
          </figure>
        </Styled.Container>
      </SafeAreaView>

      {/* FOOTER */}
      <NavigationBar />
    </>
  );
}
