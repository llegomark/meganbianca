import PersonIcon from "@icon/PersonIcon";
import SettingIcon from "@icon/SettingIcon";
import { Role } from "@type/chat";

const Avatar = ({ role }: { role: Role }) => {
  return (
    <div className="w-[30px] flex flex-col relative items-end">
      {role === "user" && <UserAvatar />}
      {role === "assistant" && <AssistantAvatar />}
      {role === "system" && <SystemAvatar />}
    </div>
  );
};

const UserAvatar = () => {
  return (
    <div
      className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"
      style={{ backgroundColor: "rgb(200, 70, 70)" }}
    >
      <PersonIcon />
    </div>
  );
};

const AssistantAvatar = () => {
  return (
    <div
      className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/markllego.jpg')",
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
      style={{ backgroundColor: "rgb(126, 163, 227)" }}
    >
      <SettingIcon />
    </div>
  );
};

export default Avatar;
