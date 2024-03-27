import { Link, Flex, Grid, AppBar, SafeAreaView } from "@/common/components";
import UserController from "@/lib/rxdb/controllers/UserController";

export default function TryAgathaScreen() {
  async function handleClick() {
    await UserController.add({
      id: 1,
      name: "2gbeh",
      email: "webmaster@hwplabs.com",
      password: "_Thathwplabsb0y",
      createdAt: new Date().toJSON(),
    });
  }
  //
  return (
    <>
      <AppBar stack="Try Agatha" />
      <SafeAreaView $offwhite>
        <button onClick={handleClick}>OK</button>
      </SafeAreaView>
    </>
  );
}
