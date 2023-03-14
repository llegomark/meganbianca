import PopupModal from '@components/PopupModal';
import PrivacyIcon from '@icon/PrivacyIcon';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyMenu = () => {
  const { t } = useTranslation(['main', 'privacy']);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div>
          <PrivacyIcon />
        </div>
        {t('Privacy Policy')}
      </a>
      {isModalOpen && (
        <PopupModal
          title={t('privacy') as string}
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
            <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm flex flex-col gap-3 leading-relaxed'>
              <p>{t('description', { ns: 'privacy' })}</p>
              <>
                <h2 className='text-lg font-bold'>
                  {t('datacollection.title', { ns: 'privacy' })}
                </h2>
                <p>{t('datacollection.paragraph1', { ns: 'privacy' })}</p>
                <h2 className='text-lg font-bold'>
                  {t('thirdparty.title', { ns: 'privacy' })}
                </h2>
                <p>{t('thirdparty.paragraph1', { ns: 'privacy' })}</p>
                <h2 className='text-lg font-bold'>
                  {t('datasecurity.title', { ns: 'privacy' })}
                </h2>
                <p>{t('datasecurity.paragraph1', { ns: 'privacy' })}</p>
                <h2 className='text-lg font-bold'>
                  {t('changes.title', { ns: 'privacy' })}
                </h2>
                <p>{t('changes.paragraph1', { ns: 'privacy' })}</p>
                <h2 className='text-lg font-bold'>
                  {t('contact.title', { ns: 'privacy' })}
                </h2>
                <p>{t('contact.paragraph1', { ns: 'privacy' })}</p>
              </>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default PrivacyMenu;
