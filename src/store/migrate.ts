import { defaultChatConfig } from '@constants/chat';
import { LocalStorageInterface } from '@type/chat';

export const migrateV0 = (persistedState: LocalStorageInterface) => {
  persistedState.chats.forEach((chat) => {
    chat.titleSet = false;
    if (!chat.config) chat.config = { ...defaultChatConfig };
  });
};
