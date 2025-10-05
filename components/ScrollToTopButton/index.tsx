'use client';

import { MdKeyboardArrowUp } from 'react-icons/md';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-28 right-3 z-10 block h-[50px] w-[50px] rounded-full bg-white p-2 text-momo-100 shadow-lg transition-transform hover:scale-105 active:scale-95 md:hidden"
      aria-label="ページトップに戻る"
    >
      <MdKeyboardArrowUp className="h-full w-full" />
    </button>
  );
};
