import { FC } from 'react';
import Link from 'next/link';
import { Tag } from '@/lib/microcms';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Props = {
  tag: Tag;
  hasLink?: boolean;
  category: string;
};

export const TagListItem: FC<Props> = ({ tag, hasLink = true, category }) => {
  const tagContent = `#${tag.name}`;

  const badgeElement = (
    <Badge
      variant="outline"
      className={cn(
        'border-2 border-[var(--color-momo-100)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-momo-100)]',
        hasLink &&
          'cursor-pointer transition-colors hover:bg-[var(--color-momo-100)] hover:text-white',
      )}
    >
      {tagContent}
    </Badge>
  );

  if (hasLink) {
    return <Link href={`/${category}/tags/${tag.id}`}>{badgeElement}</Link>;
  }

  return badgeElement;
};
