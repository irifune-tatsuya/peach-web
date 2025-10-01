import { Tag } from '@/libs/microcms';
import TagListItem from '../TagListItem';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
  category: string;
};

export default function TagList({ tags, hasLink = true, category }: Props) {
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
}
