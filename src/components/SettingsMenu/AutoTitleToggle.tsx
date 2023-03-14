import Toggle from '@components/Toggle';
import useStore from '@store/store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AutoTitleToggle = () => {
  const { t } = useTranslation();

  const setAutoTitle = useStore((state) => state.setAutoTitle);

  const [isChecked, setIsChecked] = useState<boolean>(
    useStore.getState().autoTitle
  );

  useEffect(() => {
    setAutoTitle(isChecked);
  }, [isChecked]);

  return (
    <Toggle
      label={t('autoTitle') as string}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
    />
  );
};

export default AutoTitleToggle;
