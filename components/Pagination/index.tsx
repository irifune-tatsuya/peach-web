import { LIMIT12 } from '@/constants';
import Link from 'next/link';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT12) }).map((_, i) => i + 1);
  return (
    <nav aria-label="Page navigation">
      <ul className="mt-6 flex list-none items-center justify-center p-6">
        {pages.map((p) => (
          <li className="mx-1" key={p}>
            {current !== p ? (
              <Link
                href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
                className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label={`Go to page ${p}`}
              >
                {p}
              </Link>
            ) : (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-momo-300)] text-white"
                aria-current="page"
              >
                {p}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
