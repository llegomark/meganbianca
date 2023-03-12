import useStore from '@store/store';
import React, { useEffect, useState } from 'react';

import PopupModal from '@components/PopupModal';

const ApiMenu = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const apiKey = useStore((state) => state.apiKey);
  const setApiKey = useStore((state) => state.setApiKey);
  const apiFree = useStore((state) => state.apiFree);
  const setApiFree = useStore((state) => state.setApiFree);
  const apiFreeEndpoint = useStore((state) => state.apiFreeEndpoint);
  const setApiFreeEndpoint = useStore((state) => state.setApiFreeEndpoint);

  const [_apiFree, _setApiFree] = useState<boolean>(apiFree);
  const [_apiKey, _setApiKey] = useState<string>(apiKey || '');
  const [_apiFreeEndpoint, _setApiFreeEndpoint] =
    useState<string>(apiFreeEndpoint);

  const [defaultValues, setDefaultValues] = useState({
    apiKey: '',
    apiFreeEndpoint: 'https://chat.meganchat.com/v1/',
  });

  const handleSave = async () => {
    if (_apiFree === true) {
      setApiFreeEndpoint(_apiFreeEndpoint);
      setApiFree(true);
      setIsModalOpen(false);
    } else {
      setApiKey(_apiKey);
      setApiFree(false);
      setIsModalOpen(false);
    }
  };

  const handleReset = () => {
    setDefaultValues({
      apiKey: '',
      apiFreeEndpoint: 'https://chat.meganchat.com/v1/',
    });
    _setApiKey(defaultValues.apiKey);
    _setApiFreeEndpoint(defaultValues.apiFreeEndpoint);
    _setApiFree(true);
    setApiKey(defaultValues.apiKey);
  };

  useEffect(() => {
    if (apiKey) {
      setApiFree(false);
      _setApiFree(false);
      _setApiKey(apiKey);
    }
  }, []);

  const handleClose = () => {
    _setApiFree(apiFree);
    _setApiFreeEndpoint(apiFreeEndpoint);
    apiKey && _setApiKey(apiKey);
  };

  return isModalOpen ? (
    <PopupModal
      title="API Key Settings"
      setIsModalOpen={setIsModalOpen}
      handleConfirm={handleSave}
      handleClose={handleClose}
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center mb-2">
          <input
            type="radio"
            checked={_apiFree === true}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => _setApiFree(true)}
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            API Endpoint
          </label>
        </div>

        {_apiFree && (
          <div className="mt-2 mb-6">
            <div className="text-sm text-gray-900 dark:text-gray-300 mb-2">
              Default: https://chat.meganchat.com/v1/
            </div>
            <div className="flex gap-2 items-center justify-center">
              <input
                type="text"
                className="text-gray-800 dark:text-white p-3 text-sm border-none bg-gray-200 dark:bg-gray-600 rounded-md m-0 w-full mr-0 h-8 focus:outline-none"
                value={_apiFreeEndpoint}
                onChange={(e) => {
                  _setApiFreeEndpoint(e.target.value);
                }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center">
          <input
            type="radio"
            checked={_apiFree === false}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => _setApiFree(false)}
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Enter Your API Key
          </label>
        </div>

        {_apiFree === false && (
          <div className="flex gap-2 items-center justify-center mt-2">
            <input
              type="text"
              className="text-gray-800 dark:text-white p-3 text-sm border-none bg-gray-200 dark:bg-gray-600 rounded-md m-0 w-full mr-0 h-8 focus:outline-none"
              value={_apiKey}
              placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              onChange={(e) => {
                _setApiKey(e.target.value);
              }}
            />
          </div>
        )}

        <div className="min-w-fit text-gray-900 dark:text-gray-300 text-sm mt-4">
          The free version of our service enables only up to 40 requests per
          hour. To enjoy unrestricted access, please enter the API Key or API
          Endpoint you purchased.
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="font-bold text-sm text-red-600 hover:text-red-400 dark:text-white dark:hover:text-gray-400"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </PopupModal>
  ) : (
    <></>
  );
};

export default ApiMenu;
