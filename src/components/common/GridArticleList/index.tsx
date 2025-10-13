import { FC } from 'react';
import { Article } from '@/lib/microcms';
import React from 'react';
import { LandscapeCard } from '@/components/ui/LandscapeCard';

type Props = {
  articles: Article[];
  category: string;
};

export const GridArticleList: FC<Props> = ({ articles, category }) => {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-5 lg:gap-y-20">
      {articles.map((article) => (
        <li
          key={article.id}
          className="transition-opacity duration-300 ease-in-out hover:opacity-60"
        >
          <LandscapeCard article={article} category={category} />
        </li>
      ))}
    </ul>
  );
};
