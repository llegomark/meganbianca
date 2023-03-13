import AboutMenu from '@components/AboutMenu';
import DisclaimerMenu from '@components/DisclaimerMenu';
import ImportExportChat from '@components/ImportExportChat';
import Api from './Api';
import ClearConversation from './ClearConversation';
import Me from './Me';
import ThemeSwitcher from './ThemeSwitcher';

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
