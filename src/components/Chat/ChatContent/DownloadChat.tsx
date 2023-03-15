import PopupModal from '@components/PopupModal';
import ImageIcon from '@icon/ImageIcon';
import MarkdownIcon from '@icon/MarkdownIcon';
import PdfIcon from '@icon/PdfIcon';
import useStore from '@store/store';
import {
  chatToMarkdown,
  downloadImg,
  downloadMarkdown,
  downloadPDF,
  htmlToImg,
} from '@utils/chat';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DownloadChat = React.memo(
  ({ saveRef }: { saveRef: React.RefObject<HTMLDivElement> }) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const chats = useStore.getState().chats;
    const currentChatIndex = useStore.getState().currentChatIndex;

    const handleImageDownload = async () => {
      if (saveRef?.current) {
        const imgData = await htmlToImg(saveRef.current);
        const title =
          (chats?.[currentChatIndex]?.title.trim() ?? 'download') + '.png';
        downloadImg(imgData, title);
      }
    };

    const handlePDFDownload = async () => {
      if (saveRef?.current) {
        const imgData = await htmlToImg(saveRef.current);
        const title =
          (chats?.[currentChatIndex]?.title.trim() ?? 'download') + '.pdf';
        downloadPDF(imgData, useStore.getState().theme, title);
      }
    };

    const handleMarkdownDownload = async () => {
      if (saveRef?.current && chats) {
        const markdown = chatToMarkdown(chats[currentChatIndex]);
        const title =
          (chats[currentChatIndex].title.trim() ?? 'download') + '.md';
        downloadMarkdown(markdown, title);
      }
    };

    return (
      <>
        <button
          className='btn btn-neutral'
          onClick={() => setIsModalOpen(true)}
        >
          {t('downloadChat')}
        </button>
        {isModalOpen && (
          <PopupModal
            setIsModalOpen={setIsModalOpen}
            title={t('downloadChat') as string}
            cancelButton={false}
          >
            <div className='p-6 border-b border-gray-200 dark:border-gray-600 flex gap-4'>
              <button
                className='btn btn-neutral gap-2'
                onClick={handleImageDownload}
              >
                <ImageIcon />
                Image
              </button>
              <button
                className='btn btn-neutral gap-2'
                onClick={handlePDFDownload}
              >
                <PdfIcon />
                PDF
              </button>
              <button
                className='btn btn-neutral gap-2'
                onClick={handleMarkdownDownload}
              >
                <MarkdownIcon />
                Markdown
              </button>
            </div>
          </PopupModal>
        )}
      </>
    );
  }
);

export default DownloadChat;
