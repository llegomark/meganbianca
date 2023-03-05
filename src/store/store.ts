import create, { GetState, SetState } from "zustand";
import { persist } from "zustand/middleware";
import { AuthSlice, createAuthSlice } from "./auth-slice";
import { ChatSlice, createChatSlice } from "./chat-slice";
import { ConfigSlice, createConfigSlice } from "./config-slice";
import { createInputSlice, InputSlice } from "./input-slice";

export type StoreState = ChatSlice & InputSlice & AuthSlice & ConfigSlice;

export type StoreSlice<T> = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => T;

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createChatSlice(set, get),
      ...createInputSlice(set, get),
      ...createAuthSlice(set, get),
      ...createConfigSlice(set, get),
    }),
    {
      name: "markllego",
      partialize: (state) => ({
        chats: state.chats,
        currentChatIndex: state.currentChatIndex,
        apiKey: state.apiKey,
        theme: state.theme,
      }),
    }
  )
);

export default useStore;
