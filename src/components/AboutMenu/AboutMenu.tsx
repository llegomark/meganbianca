import PopupModal from "@components/PopupModal";
import AboutIcon from "@icon/AboutIcon";
import { useState } from "react";
import Updates from "@components/Menu/MenuOptions/Updates";

const AboutMenu = () => {
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
          <AboutIcon />
        </div>
        About Us
      </a>
      {isModalOpen && (
        <PopupModal
          title="About Us"
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-600">
            <div className="min-w-fit text-gray-900 dark:text-gray-300 text-sm">
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                The AI-powered virtual assistant that provides quick and
                accurate assistance for whatever you need. Our sophisticated
                language model is designed to cater to your needs and provide
                expert guidance on a variety of topics.
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                <strong>Features</strong>
              </p>
              <ul className="list-disc list-inside mb-3">
                <li className="text-sm text-gray-900 dark:text-gray-300">
                  Intelligent and sophisticated language model
                </li>
                <li className="text-sm text-gray-900 dark:text-gray-300">
                  Expert guidance on various topics
                </li>
                <li className="text-sm text-gray-900 dark:text-gray-300">
                  Accurate and helpful responses
                </li>
                <li className="text-sm text-gray-900 dark:text-gray-300">
                  Quick and efficient processing times
                </li>
                <li className="text-sm text-gray-900 dark:text-gray-300">
                  24/7 availability
                </li>
              </ul>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3 font-bold">
                Privacy Notice
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                Thank you for choosing our services. We highly value your
                privacy and are fully committed to keeping it safe and secure.
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                Your conversations with our AI are exclusively stored on your
                local web browser and are not saved anywhere else. Rest assured,
                we do not have access to any of your conversations.
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-5">
                We do not collect or store any text that you enter or receive
                from our server in any form.
              </p>
              <p className="text-xs text-gray-900 dark:text-gray-300 text-center">
                Copyright © 2023 Eduventure Web Development Services
              </p>
              <p className="text-xs text-gray-900 dark:text-gray-300 text-center">
                Web Application created by:{" "}
                <a
                  href="https://twitter.com/nikushii_"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nixie
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/ayaka14732"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ayaka
                </a>
                , and further improved by{" "}
                <a
                  href="https://twitter.com/markllego"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mark
                </a>
                .
              </p>
              <p className="text-xs text-gray-900 dark:text-gray-300 mb-5 text-center">
                License:{" "}
                <a
                  href="https://github.com/llegomark/markllego-chat/blob/master/LICENSE"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC0 1.0 Universal
                </a>
              </p>
            </div>
            <Updates isButton />
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default AboutMenu;
