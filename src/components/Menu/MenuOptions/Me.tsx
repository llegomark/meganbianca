import TwitterIcon from '@icon/TwitterIcon';

const Me = () => {
  return (
    <a
      className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
      href='https://twitter.com/markllego'
      rel='noopener noreferrer'
      target='_blank'
    >
      <TwitterIcon />
      @markllego
    </a>
  );
};

export default Me;
