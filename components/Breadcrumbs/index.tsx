import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type breadcrumb = {
  title: string;
  href: string;
  isCurrentPage: boolean;
};

type Props = {
  breadcrumbs: Array<breadcrumb>;
};

export const Breadcrumbs: NextPage<Props> = ({ breadcrumbs }) => {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<MdOutlineKeyboardArrowRight color={'momo.400'} />}
      maxW={1152}
      mx={'auto'}
    >
      {breadcrumbs.map((item, i) => (
        <BreadcrumbItem key={i}>
          <BreadcrumbLink href={item.href} isCurrentPage={item.isCurrentPage}>
            {item.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
