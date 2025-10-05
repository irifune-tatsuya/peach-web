import Image from 'next/image';

type Props = {
  src: string;
  name: string;
  text: string;
};

export const Lp01VoiceCard = ({ src, name, text }: Props) => {
  return (
    <div className="flex flex-col space-y-4 rounded-lg bg-white p-4 pb-8 shadow-lg">
      <div className="overflow-hidden rounded-md">
        <Image src={src} alt={`${name}の写真`} width={400} height={400} className="h-auto w-full" />
      </div>
      <h3 className="text-base font-bold">{name}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
};
