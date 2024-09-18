import { Tag } from '@/libs/microcms';
import TagListItem from '../TagListItem';
import styles from './index.module.css';

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
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} category={category} />
        </li>
      ))}
    </ul>
  );
}
