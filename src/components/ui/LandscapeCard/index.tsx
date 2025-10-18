import { FC } from 'react';
import { Article } from '@/types/microcms';
import { PublishedDate } from '@/components/ui/PublishedDate';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGEBASEURL } from '@/constants';

type Props = {
  article: Article;
  category: string;
};

export const LandscapeCard: FC<Props> = ({ article, category }) => {
  const imageUrl = article.thumbnail?.url || `${IMAGEBASEURL}/no-image.webp`;
  const altText = article.thumbnail ? article.title : 'No Image';
  return (
    <div className="max-w-[400px] overflow-hidden">
      <Link href={`/${category}/${article.id}`} className="block hover:no-underline">
        <div className="relative aspect-video w-full">
          <Image src={imageUrl} alt={altText} fill className="object-cover rounded-lg" />
        </div>
        <div className="flex pt-3">
          <div className="mr-2 flex-shrink-0">
            <Image
              src={`${IMAGEBASEURL}/article/momo-icon.webp`}
              alt={'ピーチウェブアイコン'}
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="mb-1 text-base font-bold line-clamp-2">{article.title}</h3>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </div>
        </div>
      </Link>
    </div>
  );
};
