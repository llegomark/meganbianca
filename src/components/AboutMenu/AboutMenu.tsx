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
            <div className="min-w-fit text-gray-900 dark:text-gray-300">
              <p className="text-sm mb-3">
                Welcome to our AI-powered virtual assistant that provides quick
                and accurate assistance by generating text-based content on
                various topics. Our sophisticated language model is designed to
                cater to your needs and provide expert guidance on a variety of
                topics.
              </p>
              <h2 className="text-lg text-gray-900 dark:text-gray-300 font-bold mb-3">
                Features
              </h2>
              <p className="text-sm mb-3">
                Intelligent and sophisticated language model: Our AI language
                model is designed to understand your queries and provide helpful
                responses that are informative and tailored to your needs.
              </p>
              <p className="text-sm mb-3">
                Expert guidance on various topics: Whether you need help with
                homework, writing an essay, or researching a topic, our AI
                language model is here to provide expert guidance and support.
              </p>
              <p className="text-sm mb-3">
                Helpful responses: We strive to provide helpful responses to all
                your queries. However, please note that the information provided
                by the AI language model may not always be entirely accurate or
                comprehensive. Therefore, we advise you to double-check the
                information and use your own judgment before making any
                decisions based on it.
              </p>
              <p className="text-sm mb-3">
                Quick and efficient processing times: Our AI language model
                processes your queries quickly and efficiently, providing you
                with timely responses to your inquiries.
              </p>
              <p className="text-sm mb-3">
                24/7 availability: Our virtual assistant is available to assist
                you 24/7, so you can get the help you need whenever you need it.
              </p>
              <h2 className="text-lg text-gray-900 dark:text-gray-300 font-bold mb-3">
                Disclaimer
              </h2>
              <p className="text-sm mb-3">
                This website uses an AI language model designed to provide
                information to users. However, please note that the information
                provided by the AI language model may not always be entirely
                accurate or comprehensive. Therefore, we advise users to verify
                any information provided and exercise their own judgment in
                using it.
              </p>
              <p className="text-sm mb-3">
                Please be aware that the AI language model provides general
                information only and should not be considered as professional
                advice. It is not a substitute for human expertise, and users
                should not rely solely on the information provided by the model.
                The AI language model cannot guarantee the accuracy or
                completeness of any information provided.
              </p>
              <p className="text-sm mb-3">
                Users should take responsibility for verifying the accuracy of
                any information provided by the AI language model before making
                any decisions based on it. The information provided by the AI
                language model should be used at the user's own risk.
              </p>
              <p className="text-sm mb-3">
                Please note that this disclaimer only covers information
                provided by the AI language model and not information provided
                by other sources. We are not liable for any damages or losses
                that may result from the use of the information provided by the
                AI language model.
              </p>
              <p className="text-sm mb-3">
                We reserve the right to update or modify this disclaimer at any
                time without prior notice. It is the responsibility of the user
                to review this disclaimer periodically to ensure that it remains
                relevant and accurate.
              </p>
              <p className="text-xs text-gray-900 dark:text-gray-300 text-center">
                Copyright © 2023 Eduventure Web Development Services
              </p>
              <p className="text-xs text-gray-900 dark:text-gray-300 text-center">
                Web Application created by:
                <a
                  href="https://twitter.com/nikushii_"
                  className="underline ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nixie
                </a>
                and
                <a
                  href="https://twitter.com/ayaka14732"
                  className="underline ml-1 mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ayaka
                </a>
                and further improved by
                <a
                  href="https://twitter.com/markllego"
                  className="underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mark
                </a>
              </p>
              <p className="text-xs text-gray-900 dark:text-gray-300 mb-5 text-center">
                License:
                <a
                  href="https://github.com/llegomark/meganbianca/blob/master/LICENSE"
                  className="underline ml-1"
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
