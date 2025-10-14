import { FC } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  onToggle: () => void;
};

export const MenuButton: FC<Props> = ({ onToggle }) => {
  return (
    <Button onClick={onToggle} variant="ghost" className="h-auto w-14 flex-col gap-0 p-1">
      <Menu className="!h-7 !w-7" />
      <span className="text-[10px]">メニュー</span>
    </Button>
  );
};
