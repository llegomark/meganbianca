import PopupModal from "@components/PopupModal";
import AboutIcon from "@icon/AboutIcon";
import { useState } from "react";

const AboutMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm sm:w-max"
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
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                <strong>Privacy Notice</strong>
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                Thank you for choosing our services. We respect your privacy and
                are committed to protecting it with the highest standards.
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                We do not collect or store any text you enter or receive from
                the OpenAI server in any form. Our source code is available for
                your inspection to verify this statement.
              </p>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default AboutMenu;
