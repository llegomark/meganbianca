import AboutMenu from '@components/AboutMenu';
import ImportExportChat from '@components/ImportExportChat';
import PrivacyMenu from '@components/PrivacyMenu';
import SettingsMenu from '@components/SettingsMenu';
import Api from './Api';
import ClearConversation from './ClearConversation';
import Me from './Me';

const MenuOptions = () => {
  return (
    <>
      <ClearConversation />
      <ImportExportChat />
      <PrivacyMenu />
      <AboutMenu />
      <Api />
      <SettingsMenu />
      <Me />
    </>
  );
};

export default MenuOptions;
