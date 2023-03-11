import useStore from "@store/store";

const StopGeneratingButton = () => {
  const setGenerating = useStore((state) => state.setGenerating);
  const generating = useStore((state) => state.generating);

  return generating ? (
    <div
      className="absolute bottom-6 left-0 right-0 m-auto flex md:w-full md:m-auto gap-0 md:gap-2 justify-center"
      onClick={() => setGenerating(false)}
    >
      <button className="btn relative btn-neutral border-0 md:border hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
        <div className="flex w-full items-center justify-center gap-2 text-base-color">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 512 512"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"></path>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
          Stop Generating
        </div>
      </button>
    </div>
  ) : (
    <></>
  );
};

export default StopGeneratingButton;
