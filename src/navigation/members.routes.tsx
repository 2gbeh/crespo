import MembersScreen from "@/screens/dashboard/members";
import CreateMemberScreen from "@/screens/dashboard/members/create";

export default {
  path: "members",
  children: [
    {
      index: true,
      element: <MembersScreen />,
    },
    {
      path: "create",
      element: <CreateMemberScreen />,
    },
  ],
};
