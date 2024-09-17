import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './index.module.css';

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
    <Box
      bg={'momo.300'}
      fontSize={'small'}
      py={10}
      px={4}
      mt={{ base: 15, md: 156 }}
      mb={{ base: 16, md: 0 }}
    >
      <Breadcrumb
        spacing="8px"
        separator={<MdOutlineKeyboardArrowRight color={'momo.400'} />}
        maxW={1152}
        className={styles.breadcrumb}
      >
        {breadcrumbs.map((item, i) => (
          <BreadcrumbItem key={i}>
            <BreadcrumbLink href={item.href} isCurrentPage={item.isCurrentPage}>
              {item.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};
