import { Article } from '@/lib/microcms';
import React from 'react';
import LandscapeCard from '../LandscapeCard';

type Props = {
  articles: Article[];
  category: string;
};

export default function GridArticleList({ articles, category }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <li
          key={article.id}
          className="transition-opacity duration-300 ease-in-out hover:opacity-60"
        >
          <LandscapeCard article={article} category={category} maxW={400} />
        </li>
      ))}
    </ul>
  );
}
