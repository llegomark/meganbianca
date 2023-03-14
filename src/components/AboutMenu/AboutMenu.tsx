import PopupModal from '@components/PopupModal';
import AboutIcon from '@icon/AboutIcon';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GitHub from '@components/Menu/MenuOptions/GitHub';

const AboutMenu = () => {
  const { t } = useTranslation(['main', 'about']);
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
          <AboutIcon />
        </div>
        {t('about')}
      </a>
      {isModalOpen && (
        <PopupModal
          title={t('about') as string}
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
            <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm flex flex-col gap-3 leading-relaxed'>
              <p>{t('description', { ns: 'about' })}</p>
              <>
                <h2 className='text-lg font-bold'>
                  {t('features.title', { ns: 'about' })}
                </h2>
                <p>{t('features.paragraph1', { ns: 'about' })}</p>
                <p>{t('features.paragraph2', { ns: 'about' })}</p>
                <p>{t('features.paragraph3', { ns: 'about' })}</p>
                <p>{t('features.paragraph4', { ns: 'about' })}</p>
                <p>{t('features.paragraph5', { ns: 'about' })}</p>
                <p>{t('features.paragraph6', { ns: 'about' })}</p>
                <p>{t('features.paragraph7', { ns: 'about' })}</p>
                <p>{t('features.paragraph8', { ns: 'about' })}</p>
                <p>{t('features.paragraph9', { ns: 'about' })}</p>
                <p>{t('features.paragraph10', { ns: 'about' })}</p>
                <p>{t('features.paragraph11', { ns: 'about' })}</p>
                <p>{t('features.paragraph12', { ns: 'about' })}</p>
                <h2 className='text-lg font-bold'>
                  {t('disclaimer.title', { ns: 'about' })}
                </h2>
                <p>{t('disclaimer.paragraph1', { ns: 'about' })}</p>
                <p>{t('disclaimer.paragraph2', { ns: 'about' })}</p>
                <p>{t('disclaimer.paragraph3', { ns: 'about' })}</p>
                <p>{t('disclaimer.paragraph4', { ns: 'about' })}</p>
                <p>{t('disclaimer.paragraph5', { ns: 'about' })}</p>
                <p className='text-xs text-gray-900 dark:text-gray-300 text-center mb-5'>
                  {t('disclaimer.paragraph6', { ns: 'about' })}
                  <a
                    href='https://twitter.com/markllego'
                    className='underline ml-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('disclaimer.paragraph7', { ns: 'about' })}
                  </a>
                </p>
              </>
            </div>
            <GitHub isButton />
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default AboutMenu;
