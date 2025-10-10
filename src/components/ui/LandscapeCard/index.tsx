import { FC } from 'react';
import { Article } from '@/lib/microcms';
import { PublishedDate } from '@/components/ui/PublishedDate';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGEBASEURL } from '@/constants';

type Props = {
  article: Article;
  category: string;
  maxW: number;
};

export const LandscapeCard: FC<Props> = ({ article, category, maxW }) => {
  const imageUrl = article.thumbnail?.url || `${IMAGEBASEURL}/no-image.webp`;
  const altText = article.thumbnail ? article.title : 'No Image';

  return (
    <div
      className="min-w-[250px] w-auto overflow-hidden rounded-lg bg-white shadow-md"
      style={{ maxWidth: `${maxW}px` }}
    >
      <Link href={`/${category}/${article.id}`} className="hover:no-underline">
        <div className="relative aspect-video w-full">
          <Image src={imageUrl} alt={altText} fill className="object-cover" />
        </div>
        <div className="flex flex-col p-2">
          <h3 className="my-3 text-base line-clamp-2">{article.title}</h3>
          <PublishedDate date={article.publishedAt || article.createdAt} />
        </div>
      </Link>
    </div>
  );
};
