import defaultPrompts from '@constants/prompt';
import { Prompt } from '@type/prompt';
import { StoreSlice } from './store';

export interface PromptSlice {
  prompts: Prompt[];
  setPrompts: (commandPrompt: Prompt[]) => void;
}

export const createPromptSlice: StoreSlice<PromptSlice> = (set, get) => ({
  prompts: defaultPrompts,
  setPrompts: (prompts: Prompt[]) => {
    set((prev: PromptSlice) => ({
      ...prev,
      prompts: prompts,
    }));
  },
});
