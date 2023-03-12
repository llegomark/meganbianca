import useStore from '@store/store';
import { useState } from 'react';

import ApiMenu from '@components/ApiMenu';
import PersonIcon from '@icon/PersonIcon';

const Config = () => {
  const apiFree = useStore((state) => state.apiFree);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
        onClick={() => setIsModalOpen(true)}
      >
        <PersonIcon />
        My Account: {apiFree ? 'Free' : 'Personal'}
      </a>
      <ApiMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Config;
