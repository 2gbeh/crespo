import { Link } from "react-router-dom";
import Head from "@/components/Head";
import Splash from "@/components/Splash";
//
import PATH from "@/constants/PATH";

export default function SplashScreen() {
  return (
    <>
      <Head title="Splash" />
      <Link to={PATH.login}>
        SplashScreen
        <Splash />
      </Link>
    </>
  );
}
