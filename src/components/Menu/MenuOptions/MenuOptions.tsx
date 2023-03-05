import ClearConversation from "./ClearConversation";
import Me from "./Me";
import ThemeSwitcher from "./ThemeSwitcher";
import Updates from "./Updates";

const MenuOptions = () => {
  return (
    <>
      <ClearConversation />
      {/* <Config /> */}
      <ThemeSwitcher />
      {/* <Account /> */}
      <Me />
      <Updates />
      {/* <Logout /> */}
    </>
  );
};

export default MenuOptions;
