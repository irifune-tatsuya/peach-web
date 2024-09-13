import styles from './index.module.css';
import { Button, Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MdMenu } from 'react-icons/md';

type Props = {
  onToggle: () => void;
};

export const MenuButton: NextPage<Props> = ({ onToggle }) => {
  return (
    <Box as="button" onClick={onToggle} p={0} w={10}>
      <Box display={'flex'} flexFlow={'column'} alignItems={'center'}>
        <MdMenu size={'1.5rem'} />
        <Box as="span" fontSize={'xx-small'} fontWeight={'bold'}>
          メニュー
        </Box>
      </Box>
    </Box>
  );
};
