import { Role } from "@type/chat";
import { StoreSlice } from "./store";

export interface InputSlice {
  inputRole: Role;
  setInputRole: (inputRole: Role) => void;
}

export const createInputSlice: StoreSlice<InputSlice> = (set, get) => ({
  inputRole: "user",
  setInputRole: (inputRole: Role) => {
    set((prev: InputSlice) => ({
      ...prev,
      inputRole: inputRole,
    }));
  },
});
