type Props = {
  TitleEn: string;
  TitleJp: string;
  mb: number;
};

export default function ContentTitle({ TitleEn, TitleJp, mb }: Props) {
  return (
    <h2 className="font-bold text-momo-100" style={{ marginBottom: `${mb}px` }}>
      <span className="text-xl tracking-[0.08em] md:text-2xl">{TitleEn}</span>
      <span className="ml-2 text-sm">{TitleJp}</span>
    </h2>
  );
}
