import { Article } from '@/lib/microcms';
import LandscapeCard from '../LandscapeCard';
import PortraitCard from '../PortraitCard';

type Props = {
  articles: Article[];
  category: string;
};

export default function SideScrollArticleList({ articles, category }: Props) {
  if (!articles || articles.length === 0) {
    return <p className="p-4">記事がありません。</p>;
  }
  return (
    <ul className="m-1 flex list-none items-start gap-4 overflow-x-auto snap-x snap-mandatory md:m-0">
      {articles.map((article) => (
        <li key={article.id} className="flex-shrink-0 transition-opacity hover:opacity-80">
          {category === 'article' ? (
            <LandscapeCard article={article} category={category} maxW={250} />
          ) : (
            <PortraitCard article={article} category={category} maxW={200} />
          )}
        </li>
      ))}
    </ul>
  );
}
