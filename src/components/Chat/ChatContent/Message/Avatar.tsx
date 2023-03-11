import OpenAIIcon from "@icon/OpenAIIcon";
import PersonLargeIcon from "@icon/PersonLargeIcon";
import { Role } from "@type/chat";
import React from "react";

const Avatar = React.memo(({ role }: { role: Role }) => {
  return (
    <div className="w-[30px] flex flex-col relative items-end">
      {role === "user" && <UserAvatar />}
      {role === "assistant" && <AssistantAvatar />}
      {role === "system" && <SystemAvatar />}
    </div>
  );
});

const UserAvatar = () => {
  return (
    <div
      className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"
      style={{ backgroundColor: "rgb(204, 85, 119)" }}
    >
      <PersonLargeIcon />
    </div>
  );
};

const AssistantAvatar = () => {
  return (
    <div
      className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/meganprofilepic.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

const SystemAvatar = () => {
  return (
    <div
      className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"
      style={{ backgroundColor: "rgb(0, 128, 0)" }}
    >
      <OpenAIIcon />
    </div>
  );
};

export default Avatar;
