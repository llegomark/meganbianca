import ApiMenu from '@components/ApiMenu';
import PersonIcon from '@icon/PersonIcon';
import useStore from '@store/store';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Config = () => {
  const { t } = useTranslation();
  const apiFree = useStore((state) => state.apiFree);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => setIsModalOpen(true)}
      >
        <PersonIcon />
        {t('api')}: {apiFree ? t('free') : t('personal')}
      </a>
      {isModalOpen && <ApiMenu setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Config;
