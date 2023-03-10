import GithubIcon from "@icon/GithubIcon";

const Github = () => {
  return (
    <a
      href="https://github.com/llegomark/"
      target="_blank"
      className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
    >
      <GithubIcon />
      GitHub
    </a>
  );
};

export default Github;
