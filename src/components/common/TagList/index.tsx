import { FC } from 'react';
import { Tag } from '@/types/microcms';
import { TagListItem } from '@/components/ui/TagListItem';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
  category: string;
};

export const TagList: FC<Props> = ({ tags, hasLink = true, category }) => {
  if (!tags) {
    return null;
  }
  return (
    <ul className="my-8 flex flex-wrap items-center justify-center gap-4">
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} category={category} />
        </li>
      ))}
    </ul>
  );
};
