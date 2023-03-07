import Config from "./Api";
import ClearConversation from "./ClearConversation";
import Me from "./Me";
import ThemeSwitcher from "./ThemeSwitcher";
import Updates from "./Updates";
import AboutMenu from "@components/AboutMenu";

const MenuOptions = () => {
  return (
    <>
      <ClearConversation />
      <ThemeSwitcher />
      <Config />
      <AboutMenu />
      {/* <Account /> */}
      <Me />
      <Updates />
      {/* <Logout /> */}
    </>
  );
};

export default MenuOptions;
