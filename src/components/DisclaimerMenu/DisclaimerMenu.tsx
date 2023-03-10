import PopupModal from "@components/PopupModal";
import DisclaimerIcon from "@icon/DisclaimerIcon";
import { useState } from "react";

const DisclaimerMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div>
          <DisclaimerIcon />
        </div>
        Disclaimer
      </a>
      {isModalOpen && (
        <PopupModal
          title="General Information Disclaimer"
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-600">
            <div className="min-w-fit text-gray-900 dark:text-gray-300 text-sm">
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                The AI language model is an artificial intelligence platform
                designed to provide information to users. However, please note
                that the information provided by the AI language model may not
                always be entirely accurate or comprehensive. Users are advised
                to verify any information provided by the AI language model and
                exercise their own judgment in using it.
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                It is important to note that the AI language model provides
                general information only and should not be considered as
                professional advice. Therefore, users should use the information
                provided by the AI language model at their own risk. While the
                AI language model aims to provide accurate and up-to-date
                information, it cannot guarantee the accuracy or completeness of
                any information provided.
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                As a result, users should take responsibility for verifying the
                accuracy of any information provided by the AI language model
                before making any decisions based on it. In conclusion, the AI
                language model is an artificial intelligence platform that
                provides general information, and users should exercise their
                own judgment and verify any information provided by the AI
                language model before using it.
              </p>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default DisclaimerMenu;
