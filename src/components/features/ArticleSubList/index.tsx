import { FC } from 'react';
import { Article } from '@/lib/microcms';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGEBASEURL } from '@/constants';

type Props = {
  articles: Article[];
  fontClassName?: string;
};

export const ArticleSubList: FC<Props> = ({ articles, fontClassName }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <ul className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-2">
      {articles.map((article) => {
        const imageUrl = article.thumbnail?.url || `${IMAGEBASEURL}/no-image.webp`;
        const altText = article.thumbnail ? article.title : 'No Image';
        return (
          <li key={article.id}>
            <Link
              href={`/peach-fight/${article.id}`}
              className="group relative block text-white hover:no-underline"
            >
              <div className="relative w-full overflow-hidden rounded-lg aspect-square">
                <Image
                  src={imageUrl}
                  alt={altText}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h4
                  className={`line-clamp-2 text-xs md:text-base lg:text-xs xl:text-sm ${
                    fontClassName || ''
                  }`}
                >
                  {article.title}
                </h4>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
