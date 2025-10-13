import { FC } from 'react';
import { Article } from '@/lib/microcms';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGEBASEURL } from '@/constants';
import { PublishedDate } from '@/components/ui/PublishedDate';

type Props = {
  article: Article;
  fontClassName?: string;
};

export const MainArticleCard: FC<Props> = ({ article, fontClassName }) => {
  const imageUrl = article.subthumbnail?.url || `${IMAGEBASEURL}/portrait-no-image.webp`;
  const altText = article.subthumbnail ? article.title : 'No Image';

  return (
    <Link
      href={`/peach-fight/${article.id}`}
      className="group relative block text-white hover:no-underline"
    >
      <div className="relative w-full overflow-hidden rounded-lg aspect-square">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
      </div>
      <div className="absolute top-4 right-4 z-20 flex h-14 md:h-20 w-14 md:w-20 md:text-xl items-center justify-center rounded-full bg-momo-100 font-bold text-white shadow-lg transition-transform group-hover:scale-110">
        NEW!
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="mb-2 inline-block rounded-lg bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
          <PublishedDate date={article.publishedAt || article.createdAt} simple={true} />
        </div>
        <h3 className={`line-clamp-2 md:text-lg ${fontClassName || ''}`}>{article.title}</h3>
      </div>
    </Link>
  );
};
