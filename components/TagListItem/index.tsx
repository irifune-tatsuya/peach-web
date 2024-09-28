import { Tag } from '@/libs/microcms';
import styles from './index.module.css';
import { Box, Link } from '@chakra-ui/react';

type Props = {
  tag: Tag;
  hasLink?: boolean;
  category: string;
};

export default function TagListItem({ tag, hasLink = true, category }: Props) {
  if (hasLink) {
    return (
      <Link href={`/${category}/tags/${tag.id}`} className={styles.tag}>
        #{tag.name}
      </Link>
    );
  }
  return (
    <Box as={'span'} className={styles.tag}>
      #{tag.name}
    </Box>
  );
}
