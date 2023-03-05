import GithubIcon from "@icon/GithubIcon";

const Me = () => {
  return (
    <a
      className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
      href="https://github.com/llegomark"
      target="_blank"
    >
      <GithubIcon />
      Github
    </a>
  );
};

export default Me;
