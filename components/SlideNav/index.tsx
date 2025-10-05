'use client';

import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from '@/lib/utils'; // shadcn/uiでおなじみのクラス名結合ユーティリティ

// --- Custom Hook to replace useBreakpointValue ---
const useScrollOffset = () => {
  const [offset, setOffset] = useState(-110); // Default to desktop offset

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 768) {
        // Tailwind's 'md' breakpoint is 768px
        setOffset(-500); // Mobile offset
      } else {
        setOffset(-110); // Desktop offset
      }
    };

    updateOffset(); // Initial check
    window.addEventListener('resize', updateOffset); // Update on resize

    return () => window.removeEventListener('resize', updateOffset); // Cleanup
  }, []);

  return offset;
};
// --- End of Custom Hook ---

interface TocItem {
  id: string;
  title: string;
  level?: number;
}

interface SlideNavProps {
  data: TocItem[];
  activeId: string;
  setActiveId: (id: string) => void;
  onLinkClick?: () => void;
}

const SlideNav: React.FC<SlideNavProps> = ({ data, activeId, setActiveId, onLinkClick }) => {
  const offsetValue = useScrollOffset();

  return (
    <nav className="rounded-lg bg-white p-5 shadow-md">
      <h2 className="mb-4 border-b border-gray-200 pb-3 text-center text-sm font-bold">目次</h2>
      <ul className="flex flex-col items-stretch space-y-1">
        {data.map((item) => {
          const isActive = activeId === item.id;
          const isSubLevel = item.level === 2;

          return (
            <li key={item.id} className="list-none">
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={offsetValue}
                onSetActive={(to: string) => setActiveId(to)}
                onClick={onLinkClick}
                className={cn(
                  'block cursor-pointer rounded-md px-3 py-2 transition-all duration-200 ease-in-out hover:bg-gray-100',
                  isActive
                    ? 'bg-momo-600 font-bold text-momo-100'
                    : 'bg-transparent font-normal text-gray-700',
                  isSubLevel ? 'pl-4 text-sm' : 'pl-2 text-md',
                )}
              >
                <div className="flex items-center">
                  <MdKeyboardArrowRight
                    className={cn('h-5 w-5', isActive ? 'text-momo-100' : 'text-gray-400')}
                  />
                  <span className="flex-1">{item.title}</span>
                </div>
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SlideNav;
