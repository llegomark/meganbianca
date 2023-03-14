import PopupModal from '@components/PopupModal';
import CrossIcon from '@icon/CrossIcon';
import PlusIcon from '@icon/PlusIcon';
import useStore from '@store/store';
import { Prompt } from '@type/prompt';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

interface PromptLibraryMenuProps {
  // no props needed
}

const PromptLibraryMenu: React.FC<PromptLibraryMenuProps> = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div>
      <button className='btn btn-neutral' onClick={handleOpenModal}>
        {t('promptLibrary')}
      </button>
      {isModalOpen && (
        <PromptLibraryMenuPopUp setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

interface PromptLibraryMenuPopUpProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PromptLibraryMenuPopUp: React.FC<PromptLibraryMenuPopUpProps> = ({
  setIsModalOpen,
}) => {
  const { t } = useTranslation();

  const setPrompts = useStore((state) => state.setPrompts);
  const [_prompts, _setPrompts] = useState<Prompt[]>(
    JSON.parse(JSON.stringify(useStore.getState().prompts))
  );
  const [textAreaHeights, setTextAreaHeights] = useState<
    Record<string, { name: string; prompt: string; height: string }>
  >({});

  // Memoize the handleInput function using useCallback to avoid creating a new function on every render.
  const handleInput = useCallback(
    (e: React.FormEvent<HTMLTextAreaElement>, id: string) => {
      const target = e.target as HTMLTextAreaElement;
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
      target.style.maxHeight = `${target.scrollHeight}px`;

      setTextAreaHeights((prevTextAreaHeights) => ({
        ...prevTextAreaHeights,
        [id]: {
          ...prevTextAreaHeights[id],
          [target.name]: target.value,
          height: `${target.scrollHeight}px`,
        },
      }));
    },
    []
  );

  // Memoize the handleOnFocus function using useCallback to avoid creating a new function on every render.
  const handleOnFocus = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement, Element>, id: string) => {
      const target = e.target as HTMLTextAreaElement;
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
      target.style.maxHeight = `${target.scrollHeight}px`;

      setTextAreaHeights((prevTextAreaHeights) => ({
        ...prevTextAreaHeights,
        [id]: {
          ...prevTextAreaHeights[id],
          height: `${target.scrollHeight}px`,
        },
      }));
    },
    []
  );

  // Memoize the handleOnBlur function using useCallback to avoid creating a new function on every render.
  const handleOnBlur = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement, Element>, id: string) => {
      const target = e.target as HTMLTextAreaElement;
      target.style.height = 'auto';
      target.style.maxHeight = '2.5rem';

      setTextAreaHeights((prevTextAreaHeights) => ({
        ...prevTextAreaHeights,
        [id]: { ...prevTextAreaHeights[id], height: '2.5rem' },
      }));
    },
    []
  );

  const handleSave = useCallback(() => {
    setPrompts(_prompts);
    setIsModalOpen(false);
  }, [_prompts, setIsModalOpen, setPrompts]);

  const addPrompt = useCallback(() => {
    const updatedPrompts: Prompt[] = JSON.parse(JSON.stringify(_prompts));
    updatedPrompts.push({
      id: uuidv4(),
      name: '',
      prompt: '',
    });
    _setPrompts(updatedPrompts);
  }, [_prompts]);

  const deletePrompt = useCallback(
    (index: number) => {
      const updatedPrompts: Prompt[] = JSON.parse(JSON.stringify(_prompts));
      updatedPrompts.splice(index, 1);
      _setPrompts(updatedPrompts);
    },
    [_prompts]
  );

  return (
    <PopupModal
      title={t('promptLibrary') as string}
      setIsModalOpen={setIsModalOpen}
      handleConfirm={handleSave}
    >
      <div className='p-6 border-b border-gray-200 dark:border-gray-600 w-[90vw] max-w-full text-sm text-gray-900 dark:text-gray-300'>
        <div className='flex flex-col p-2 max-w-full'>
          <div className='flex font-bold border-b border-gray-500/50 mb-1 p-1'>
            <div className='sm:w-1/4 max-sm:flex-1'>{t('name')}</div>
            <div className='flex-1'>{t('prompt')}</div>
          </div>
          {_prompts.map((prompt, index) => (
            <div
              key={prompt.id}
              className='flex items-center border-b border-gray-500/50 mb-1 p-1'
            >
              <div className='sm:w-1/4 max-sm:flex-1'>
                <textarea
                  className='m-0 resize-none rounded-lg bg-transparent overflow-y-hidden leading-7 p-1 focus:ring-1 focus:ring-blue w-full max-h-10 transition-all'
                  name='name'
                  onFocus={(e) => handleOnFocus(e, prompt.id)}
                  onBlur={(e) => handleOnBlur(e, prompt.id)}
                  onChange={(e) => {
                    _setPrompts((prevPrompts) => {
                      const newPrompts = [...prevPrompts];
                      newPrompts[index].name = e.target.value;
                      return newPrompts;
                    });
                  }}
                  onInput={(e) => handleInput(e, prompt.id)}
                  value={prompt.name}
                  rows={1}
                  style={{
                    height: textAreaHeights[prompt.id]?.name ?? '2.5rem',
                  }}
                ></textarea>
              </div>
              <div className='flex-1'>
                <textarea
                  className='m-0 resize-none rounded-lg bg-transparent overflow-y-hidden leading-7 p-1 focus:ring-1 focus:ring-blue w-full max-h-10 transition-all'
                  name='prompt'
                  onFocus={(e) => handleOnFocus(e, prompt.id)}
                  onBlur={(e) => handleOnBlur(e, prompt.id)}
                  onChange={(e) => {
                    _setPrompts((prevPrompts) => {
                      const newPrompts = [...prevPrompts];
                      newPrompts[index].prompt = e.target.value;
                      return newPrompts;
                    });
                  }}
                  onInput={(e) => handleInput(e, prompt.id)}
                  value={prompt.prompt}
                  rows={1}
                  style={{
                    height: textAreaHeights[prompt.id]?.prompt ?? '2.5rem',
                  }}
                ></textarea>
              </div>
              <div
                className='cursor-pointer'
                onClick={() => deletePrompt(index)}
              >
                <CrossIcon />
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center cursor-pointer' onClick={addPrompt}>
          <PlusIcon />
        </div>
        <div className='mt-6 px-2'>
          {t('morePrompts')}
          <a
            href='https://github.com/f/awesome-chatgpt-prompts'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            awesome-chatgpt-prompts
          </a>
        </div>
      </div>
    </PopupModal>
  );
};

export default PromptLibraryMenu;
