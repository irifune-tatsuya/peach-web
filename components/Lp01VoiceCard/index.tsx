import { Heading, Image, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

type Props = {
  src: string;
  name: string;
  text: string;
};

export const Lp01VoiceCard: NextPage<Props> = ({ src, name, text }) => {
  return (
    <Stack pb={8}>
      <Image src={src} alt={`${name}の写真`} w={'100%'} h={'auto'} />
      <Heading fontSize={{ base: 'medium' }}>{name}</Heading>
      <Text fontSize={{ base: 'small' }}>{text}</Text>
    </Stack>
  );
};
