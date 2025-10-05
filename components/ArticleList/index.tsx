import { Article } from '@/libs/microcms';
import Link from 'next/link';
import React from 'react';
import PublishedDate from '../PublishedDate';

type Props = {
  articles: Article[];
  category: string;
};

export default function ArticleList({ articles, category }: Props) {
  if (!articles || articles.length === 0) {
    return <p className="p-4">記事がありません。</p>;
  }
  return (
    <ol className="m-0 list-none border-t border-solid border-momo-400">
      {articles.map((item) => (
        <li key={item.id} className="border-b border-solid border-momo-400">
          <Link
            href={`/${category}/${item.id}`}
            className="block px-5 py-6 hover:bg-gray-50 hover:no-underline md:flex md:items-center"
          >
            <div className="flex shrink-0 items-center">
              {category !== 'faq' && (
                <PublishedDate date={item.publishedAt || item.createdAt} simple={true} />
              )}

              <div className="ml-6 flex flex-wrap gap-2">
                {category === 'faq' ? (
                  item.tags?.map((tag) => (
                    <span
                      key={tag.id}
                      className="whitespace-nowrap rounded-full bg-momo-100 px-3 py-1 text-xs font-bold text-white"
                    >
                      {`#${tag.name}`}
                    </span>
                  ))
                ) : (
                  <span className="whitespace-nowrap rounded-full bg-momo-100 px-3 py-1 text-xs font-bold text-white">
                    お知らせ
                  </span>
                )}
              </div>
            </div>
            <div className="mt-3 leading-normal md:ml-8 md:mt-0">
              <p>{item.title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
