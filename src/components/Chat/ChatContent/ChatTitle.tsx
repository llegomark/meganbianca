import ConfigMenu from '@components/ConfigMenu';
import { defaultChatConfig } from '@constants/chat';
import useStore from '@store/store';
import { ChatInterface, ConfigInterface } from '@type/chat';
import React, { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';

const ChatTitle = React.memo(() => {
  const config = useStore(
    (state) =>
      state.chats &&
      state.chats.length > 0 &&
      state.currentChatIndex >= 0 &&
      state.currentChatIndex < state.chats.length
        ? state.chats[state.currentChatIndex].config
        : undefined,
    shallow
  );
  const setChats = useStore((state) => state.setChats);
  const currentChatIndex = useStore((state) => state.currentChatIndex);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const setConfig = (config: ConfigInterface) => {
    const updatedChats: ChatInterface[] = JSON.parse(
      JSON.stringify(useStore.getState().chats)
    );
    updatedChats[currentChatIndex].config = config;
    setChats(updatedChats);
  };

  // for migrating from old ChatInterface to new ChatInterface (with config)
  useEffect(() => {
    const chats = useStore.getState().chats;
    if (chats && chats.length > 0 && currentChatIndex !== -1 && !config) {
      const updatedChats: ChatInterface[] = JSON.parse(JSON.stringify(chats));
      updatedChats[currentChatIndex].config = { ...defaultChatConfig };
      setChats(updatedChats);
    }
  }, [currentChatIndex]);

  return config ? (
    <>
      <div
        className="flex gap-2 flex-wrap w-full items-center justify-center border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 text-gray-500 dark:text-gray-400 cursor-pointer rounded-md shadow-md dark:shadow-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="text-xs text-center p-1 rounded-md bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-100">
          Model: GPT-3.5-Turbo
        </div>

        <div className="hidden sm:block text-xs text-center p-1 rounded-md bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-100">
          Temperature: {config.temperature}
        </div>

        <div className="hidden sm:block text-xs text-center p-1 rounded-md bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-900 hover:text-gray-900 dark:hover:text-gray-100">
          Presence Penalty: {config.presence_penalty}
        </div>
      </div>
      {isModalOpen && (
        <ConfigMenu
          setIsModalOpen={setIsModalOpen}
          config={config}
          setConfig={setConfig}
        />
      )}
    </>
  ) : (
    <></>
  );
});

export default ChatTitle;
// const ChatTitle = () => {
//   return (
//     <div className="flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300">
//       Model: GPT-3.5-Turbo
//     </div>
//   );
// };

// export default ChatTitle;
