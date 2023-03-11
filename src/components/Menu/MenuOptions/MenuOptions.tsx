import AboutMenu from "@components/AboutMenu";
import DisclaimerMenu from "@components/DisclaimerMenu";
import Api from "./Api";
import ClearConversation from "./ClearConversation";
import Me from "./Me";
import ThemeSwitcher from "./ThemeSwitcher";
import ImportExportChat from "@components/ImportExportChat";

const MenuOptions = () => {
  return (
    <>
      <ClearConversation />
      <ImportExportChat />
      <ThemeSwitcher />
      <Api />
      <DisclaimerMenu />
      {/* <Account /> */}
      {/* <Github /> */}
      <AboutMenu />
      <Me />
      {/* <Logout /> */}
    </>
  );
};

export default MenuOptions;
