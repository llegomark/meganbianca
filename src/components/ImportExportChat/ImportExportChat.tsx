import PopupModal from '@components/PopupModal';
import ExportIcon from '@icon/ExportIcon';
import useStore from '@store/store';
import { validateAndFixChats } from '@utils/chat';
import { getToday } from '@utils/date';
import downloadFile from '@utils/downloadFile';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ImportExportChat = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <a
        className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={openModal}
      >
        <ExportIcon className='w-4 h-4'>
          <title>{t('export')}</title>
        </ExportIcon>
        {t('export')}/{t('import')} {t('chat')}
      </a>
      {isModalOpen && (
        <PopupModal
          title={`${t('export')}/${t('import')} ${t('messages')}`}
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
            <ExportChat />
            <ImportChat />
          </div>
        </PopupModal>
      )}
    </>
  );
};

const ExportChat = () => {
  const { t } = useTranslation();
  const chats = useStore((state) => state.chats);

  const handleExport = useCallback(() => {
    if (chats) {
      const randomNumber = Math.floor(Math.random() * 1_000_000);
      const fileName = `${getToday()}_${randomNumber}`;
      downloadFile(chats, fileName);
    }
  }, [chats]);

  return (
    <div>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
        {t('export')} (.json file)
      </label>
      <button
        className='btn btn-small btn-primary'
        onClick={handleExport}
        disabled={!chats}
      >
        {t('export')}
      </button>
      {!chats && (
        <span className='sr-only'>
          {t('Button disabled')}: {t('no chats available')}
        </span>
      )}
    </div>
  );
};

const ImportChat = () => {
  const { t } = useTranslation();
  const setChats = useStore((state) => state.setChats);
  const inputRef = useRef<HTMLInputElement>(null);
  const [alert, setAlert] = useState<{
    message: string;
    success: boolean;
  } | null>(null);

  const handleFileUpload = () => {
    const file = inputRef?.current?.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target?.result as string;

        try {
          const parsedData = JSON.parse(data);
          if (validateAndFixChats(parsedData)) {
            setChats(parsedData);
            setAlert({ message: 'Succesfully imported!', success: true });
          } else {
            setAlert({
              message: 'Invalid chats data format',
              success: false,
            });
          }
        } catch (error: unknown) {
          setAlert({ message: (error as Error).message, success: false });
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <>
      <label className='block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
        {t('import')} (.json file)
      </label>
      <input
        className='w-full text-sm file:p-2 text-gray-800 file:text-gray-700 dark:text-gray-300 dark:file:text-gray-200 rounded-md cursor-pointer focus:outline-none bg-gray-50 file:bg-gray-100 dark:bg-gray-800 dark:file:bg-gray-700 file:border-0 border border-gray-300 dark:border-gray-600 placeholder-gray-900 dark:placeholder-gray-300 file:cursor-pointer'
        type='file'
        ref={inputRef}
        onChange={handleFileUpload}
      />
      <button className='btn btn-small btn-primary mt-3'>{t('import')}</button>
      {alert && (
        <div
          className={`relative py-2 px-3 w-full mt-3 border rounded-md text-gray-600 dark:text-gray-100 text-sm whitespace-pre-wrap ${
            alert.success
              ? 'border-green-500 bg-green-500/10'
              : 'border-red-500 bg-red-500/10'
          }`}
        >
          {alert.message}
        </div>
      )}
    </>
  );
};

export default ImportExportChat;
