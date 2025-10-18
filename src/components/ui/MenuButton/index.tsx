import { FC } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  onToggle: () => void;
  className?: string;
};

export const MenuButton: FC<Props> = ({ onToggle, className }) => {
  return (
    <Button
      onClick={onToggle}
      variant="gray"
      size="icon"
      className={cn('rounded-full h-12 w-12 cursor-pointer', className)}
    >
      <Menu className="!h-6 !w-6" />
      <span className="sr-only">メニューを開く</span>
    </Button>
  );
};
