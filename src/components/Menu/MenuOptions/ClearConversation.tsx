import PopupModal from "@components/PopupModal";
import useInitialiseNewChat from "@hooks/useInitialiseNewChat";
import DeleteIcon from "@icon/DeleteIcon";
import { useState } from "react";

const ClearConversation = () => {
  const initialiseNewChat = useInitialiseNewChat();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleConfirm = () => {
    setIsModalOpen(false);
    initialiseNewChat();
  };

  return (
    <>
      <a
        className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <DeleteIcon />
        Clear Conversations
      </a>
      {isModalOpen && (
        <PopupModal
          setIsModalOpen={setIsModalOpen}
          title="Heads Up!"
          message="By confirming this action, please be aware that all messages will be deleted."
          handleConfirm={handleConfirm}
        />
      )}
    </>
  );
};

export default ClearConversation;
