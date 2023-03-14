import useStore from '@store/store';
import { Prompt } from '@type/prompt';
import { matchSorter } from 'match-sorter';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

type CommandPromptProps = {
  _setContent: React.Dispatch<React.SetStateAction<string>>;
};

const CommandPrompt = ({ _setContent }: CommandPromptProps) => {
  const { t } = useTranslation();
  const { prompts } = useStore();
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const filteredPrompts = useMemo(
    () => matchSorter(prompts, input, { keys: ['name'] }),
    [input, prompts]
  );

  useEffect(() => {
    setInput('');
  }, [prompts]);

  return (
    <div className='relative max-wd-sm'>
      <button
        className='btn btn-neutral btn-small'
        onClick={() => setDropDown(!dropDown)}
      >
        /
      </button>
      <div
        className={`${
          dropDown ? '' : 'hidden'
        } absolute top-100 bottom-100 right-0 z-10 bg-white rounded-lg shadow-xl border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800 opacity-90`}
      >
        <div className='text-sm px-4 py-2 w-max'>{t('promptLibrary')}</div>
        <label htmlFor='search-input' className='sr-only'>
          {t('search')}
        </label>
        <input
          type='text'
          id='search-input'
          className='text-gray-800 dark:text-white p-3 text-sm border-none bg-gray-200 dark:bg-gray-600 m-0 w-full mr-0 h-8 focus:outline-none'
          value={input}
          placeholder={t('search') as string}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <ul className='text-sm text-gray-700 dark:text-gray-200 p-0 m-0 w-max max-w-sm max-md:max-w-[90vw] max-h-32 overflow-auto'>
          {filteredPrompts.map((cp: Prompt) => (
            <li
              className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer text-start w-full'
              onClick={() => {
                _setContent((prev) => prev + cp.prompt);
                setDropDown(false);
              }}
              key={cp.id}
            >
              {cp.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandPrompt;
