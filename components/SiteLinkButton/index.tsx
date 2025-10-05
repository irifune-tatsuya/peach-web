import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { ReactNode } from 'react';

type SiteLinkButtonProps = {
  href: string;
  icon: ReactNode;
  text: string;
  className?: string;
};

export const SiteLinkButton = ({ href, icon, text, className }: SiteLinkButtonProps) => {
  return (
    <div className={className}>
      <Button
        asChild
        className="mx-auto block h-14 w-[280px] rounded-full border-2 border-momo-200 bg-momo-200 text-foreground shadow-md transition-colors duration-300 ease-in-out hover:border-momo-100 hover:bg-white hover:text-momo-100"
      >
        <Link href={href} className="flex items-center justify-center gap-2">
          {icon}
          <span>{text}</span>
        </Link>
      </Button>
    </div>
  );
};
