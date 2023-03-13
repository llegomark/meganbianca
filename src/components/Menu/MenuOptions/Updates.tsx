import LinkIcon from '@icon/LinkIcon';

const Updates = ({ isButton = false }: { isButton?: boolean }) => {
  return (
    <a
      href="https://github.com/llegomark/meganbianca"
      target="_blank"
      rel="noopener noreferrer"
      className={
        isButton
          ? 'flex py-3 px-3 items-center gap-3 transition-colors duration-200 btn btn-neutral text-sm justify-center'
          : 'flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
      }
    >
      <LinkIcon />
      GitHub
    </a>
  );
};

export default Updates;
