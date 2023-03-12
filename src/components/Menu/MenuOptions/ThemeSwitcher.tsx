import MoonIcon from '@icon/MoonIcon';
import SunIcon from '@icon/SunIcon';
import useStore from '@store/store';
import { Theme } from '@type/theme';
import { useEffect } from 'react';

const getOppositeTheme = (theme: Theme): Theme => {
  if (theme === 'dark') {
    return 'light';
  } else {
    return 'dark';
  }
};
const ThemeSwitcher = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);

  const switchTheme = () => {
    setTheme(getOppositeTheme(theme!));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return theme ? (
    <a
      className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
      onClick={switchTheme}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      {getOppositeTheme(theme).charAt(0).toUpperCase() +
        getOppositeTheme(theme).slice(1)}{' '}
      Mode
    </a>
  ) : (
    <></>
  );
};

export default ThemeSwitcher;
