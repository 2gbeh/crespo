import { useNavigate } from "react-router-dom";
import Head from "@/components/Head";

export default function TentScreen() {
  const navigate = useNavigate();
  //
  return (
    <>
      <Head title="Under Construction" />
      TentScreen
      <button onClick={() => navigate(-1)}>Return</button>
    </>
  );
}
