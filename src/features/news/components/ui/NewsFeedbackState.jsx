import Link from "next/link";

const ICON_PATHS = {
  "not-found":
    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  error:
    "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  empty:
    "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
};

const BUTTON_CLASS =
  "block w-full sm:w-44 text-center border border-solid border-[#C1271A] text-[#C1271A] hover:bg-[#C1271A] hover:text-white dark:border-[#EF4444] dark:text-[#EF4444] dark:hover:bg-[#EF4444] dark:hover:text-white font-[rubik] text-sm font-bold py-2.5 rounded-full transition duration-300 ease-in-out";

const RETRY_CLASS =
  "block w-full sm:w-auto px-6 text-center border border-solid border-[#C1271A] bg-[#C1271A] hover:bg-[#F82F1E] hover:border-[#F82F1E] text-white dark:border-[#EF4444] dark:bg-[#EF4444] dark:hover:bg-[#F87171] dark:hover:border-[#F87171] font-[rubik] text-sm font-bold py-2.5 rounded-full transition duration-300 ease-in-out";

const NewsFeedbackState = ({
  type,
  title,
  message,
  onRetry,
  backHref,
  backLabel,
}) => {
  return (
    <div className="w-full flex justify-center px-4 py-12 md:py-16">
      <div className="w-full max-w-md p-6 sm:p-8 bg-white dark:bg-[#111827] rounded-3xl border border-solid border-[#E3E3E3] dark:border-[#1E293B] shadow-sm flex flex-col items-center text-center text-red-500 transition-colors duration-300">
        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#FCF6F6] dark:bg-red-950/50">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d={ICON_PATHS[type]} />
          </svg>
        </div>
        <h3 className="font-[rubik] text-xl font-bold text-[#332C2B] dark:text-[#F8FAFC] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#6A6A6A] dark:text-[#CBD5E1] mb-6">{message}</p>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-3">
          {onRetry && (
            <button type="button" onClick={onRetry} className={RETRY_CLASS}>
              Try Again
            </button>
          )}
          {backHref && (
            <Link href={backHref} className={BUTTON_CLASS}>
              {backLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsFeedbackState;
