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
        Privacy Policy
      </a>
      {isModalOpen && (
        <PopupModal
          title="Privacy Policy"
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-600">
            <div className="min-w-fit text-gray-900 dark:text-gray-300 text-sm">
              {/* <h2 className="text-lg text-gray-900 dark:text-gray-300 font-bold mb-3">
                Privacy Notice
              </h2> */}
              <p className="text-sm mb-3">
                At Eduventure Web Development Services, we take your privacy
                seriously and are committed to protecting it. This privacy
                notice explains how we collect, use, and safeguard your personal
                data when you use our services.
              </p>
              <h3 className="text-base text-gray-900 dark:text-gray-300 font-bold mb-3">
                Data Collection and Use
              </h3>
              <p className="text-sm mb-3">
                We do not collect or store any text that you enter or receive
                from our server in any form. All conversations you have with our
                AI language model, which is powered by OpenAI, are exclusively
                stored on your local web browser and are not saved anywhere
                else. We do not have access to any of your conversations or
                personal data.
              </p>
              <h3 className="text-base text-gray-900 dark:text-gray-300 font-bold mb-3">
                Third-Party Services
              </h3>
              <p className="text-sm mb-3">
                We use third-party services to improve the quality, speed, and
                security of our website. We use Cloudflare for hosting, API
                endpoints, analytics, site speed, and security. Cloudflare may
                collect and use your personal data according to their own
                privacy policies. We also use OpenAI for the AI language model
                and Google Analytics to analyze user behavior and improve our
                services. OpenAI and Google Analytics may collect and use your
                personal data according to their own privacy policies.
              </p>
              <h3 className="text-base text-gray-900 dark:text-gray-300 font-bold mb-3">
                Data Security
              </h3>
              <p className="text-sm mb-3">
                We have implemented appropriate technical and organizational
                measures to safeguard your personal data from unauthorized
                access, use, or disclosure. However, please note that no data
                transmission over the internet can be guaranteed to be 100%
                secure, and we cannot guarantee the security of any information
                you provide to us.
              </p>
              <h3 className="text-base text-gray-900 dark:text-gray-300 font-bold mb-3">
                Changes to this Privacy Notice
              </h3>
              <p className="text-sm mb-3">
                We reserve the right to update or change this privacy notice at
                any time without prior notice. We encourage you to review this
                notice periodically to stay informed about our data collection
                and use practices.
              </p>
              <h3 className="text-base text-gray-900 dark:text-gray-300 font-bold mb-3">
                Contact Us
              </h3>
              <p className="text-sm mb-3">
                If you have any questions or concerns about our privacy
                practices, please contact us at support@eduventure.dev.
              </p>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default DisclaimerMenu;
