import Link from 'next/link';
import { Tag } from '@/libs/microcms';
import { Badge } from '@/components/ui/badge';

type Props = {
  tag: Tag;
  hasLink?: boolean;
  category: string;
};

export default function TagListItem({ tag, hasLink = true, category }: Props) {
  const tagContent = `#${tag.name}`;

  if (hasLink) {
    return (
      <Link href={`/${category}/tags/${tag.id}`}>
        <Badge
          variant="outline"
          className="cursor-pointer border-2 border-[var(--color-momo-100)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-momo-100)] transition-colors hover:bg-[var(--color-momo-100)] hover:text-white"
        >
          {tagContent}
        </Badge>
      </Link>
    );
  }

  return (
    <Badge
      variant="outline"
      className="border-2 border-[var(--color-momo-100)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-momo-100)]"
    >
      {tagContent}
    </Badge>
  );
}
