import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type BreadcrumbItem = {
  title: string;
  href: string;
  isCurrentPage: boolean;
};

type Props = {
  breadcrumbs: BreadcrumbItem[];
};

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <nav aria-label="breadcrumb" className="bg-momo-300 px-4 py-4 text-sm">
      <ol className="mx-auto flex max-w-6xl flex-wrap">
        {breadcrumbs.map((item, i) => (
          <li key={i} className="flex items-center">
            {item.isCurrentPage ? (
              <span className="font-bold text-gray-500" aria-current="page">
                {item.title}
              </span>
            ) : (
              <Link
                href={item.href}
                className="transition-colors hover:text-momo-100 hover:underline"
              >
                {item.title}
              </Link>
            )}
            {i < breadcrumbs.length - 1 && (
              <MdOutlineKeyboardArrowRight className="mx-2 h-5 w-5 shrink-0" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
