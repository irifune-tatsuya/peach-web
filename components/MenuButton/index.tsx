import { NextPage } from 'next';
import { MdMenu } from 'react-icons/md';

type Props = {
  onToggle: () => void;
};

export const MenuButton: NextPage<Props> = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="w-14">
      <div className="flex flex-col items-center">
        <MdMenu size={32} />
        <span className="text-[10px]">メニュー</span>
      </div>
    </button>
  );
};
