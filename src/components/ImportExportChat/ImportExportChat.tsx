import useStore from "@store/store";
import { useRef, useState } from "react";

import PopupModal from "@components/PopupModal";
import ExportIcon from "@icon/ExportIcon";
import { isChats } from "@utils/chat";
import { getToday } from "@utils/date";
import downloadFile from "@utils/downloadFile";

const ImportExportChat = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <ExportIcon className="w-4 h-4" />
        Export Chat
      </a>
      {isModalOpen && (
        <PopupModal
          title="Import/Export Chat Messages"
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-600">
            <ImportChat />
            <ExportChat />
          </div>
        </PopupModal>
      )}
    </>
  );
};

const ImportChat = () => {
  const setChats = useStore.getState().setChats;
  const inputRef = useRef<HTMLInputElement>(null);
  const [alert, setAlert] = useState<{
    message: string;
    success: boolean;
  } | null>(null);

  const handleFileUpload = () => {
    if (!inputRef || !inputRef.current) return;
    const file = inputRef.current.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target?.result as string;

        try {
          const parsedData = JSON.parse(data);
          if (isChats(parsedData)) {
            setChats(parsedData);
            setAlert({
              message: "Chat Messages Succesfully Imported!",
              success: true,
            });
          } else {
            setAlert({
              message: "Invalid Messages Data Format",
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
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Import (JSON)
      </label>
      <input
        className="w-full text-sm file:p-2 text-gray-800 file:text-gray-700 dark:text-gray-300 dark:file:text-gray-200 rounded-md cursor-pointer focus:outline-none bg-gray-50 file:bg-gray-100 dark:bg-gray-800 dark:file:bg-gray-700 file:border-0 border border-gray-300 dark:border-gray-600 placeholder-gray-900 dark:placeholder-gray-300 file:cursor-pointer"
        type="file"
        ref={inputRef}
      />
      <button
        className="btn btn-small btn-primary mt-3"
        onClick={handleFileUpload}
      >
        Import
      </button>
      {alert && (
        <div
          className={`relative py-2 px-3 w-full mt-3 border rounded-md text-gray-600 dark:text-gray-100 text-sm whitespace-pre-wrap ${
            alert.success
              ? "border-green-500 bg-green-500/10"
              : "border-red-500 bg-red-500/10"
          }`}
        >
          {alert.message}
        </div>
      )}
    </>
  );
};

const ExportChat = () => {
  const chats = useStore.getState().chats;

  const handleExport = () => {
    if (chats) {
      const randomNumber = Math.floor(Math.random() * 1000000);
      const fileName = getToday() + "_" + randomNumber;
      downloadFile(chats, fileName);
    }
  };

  return (
    <div className="mt-6">
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Export (JSON)
      </div>
      <button className="btn btn-small btn-primary" onClick={handleExport}>
        Export
      </button>
    </div>
  );
};

export default ImportExportChat;
