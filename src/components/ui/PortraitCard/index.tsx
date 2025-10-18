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

export const PortraitCard: FC<Props> = ({ article, category }) => {
  const imageUrl = article.peach_fight_details?.subthumbnail?.url || `${IMAGEBASEURL}/portrait-no-image.webp`;
  const altText = article.peach_fight_details?.subthumbnail ? article.title : 'No Image';

  return (
    <div className="w-[230px] md:w-[280px] lg:w-[208px] overflow-hidden">
      <Link href={`/${category}/${article.id}`} className="block hover:no-underline">
        <div className="relative w-full aspect-[9/16]">
          <Image src={imageUrl} alt={altText} fill className="object-cover rounded-lg" />
        </div>
        <div className="pt-3">
          <div className="flex-grow">
            <h3 className="mb-1 text-base font-bold line-clamp-2">{article.title}</h3>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </div>
        </div>
      </Link>
    </div>
  );
};
