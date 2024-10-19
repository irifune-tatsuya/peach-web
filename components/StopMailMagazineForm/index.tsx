'use client';

import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createStopMailMagazineData } from '@/app/_action/contact';
import { IMAGEBASEURL } from '@/constants';

type stopMailMagazineInputs = {
  email: string;
};

export const StopMailMagazineForm: NextPage = () => {
  const [isStopChecked, setIsStopChecked] = useState(false);
  const [stopstatus, setStopStatus] = useState<string | null>(null);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsStopChecked(event.target.checked);
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<stopMailMagazineInputs>();

  const onStopSubmit = async (data: stopMailMagazineInputs) => {
    const result = await createStopMailMagazineData(data);
    setStopStatus(result);
  };

  if (stopstatus === 'succcess') {
    return (
      <Box mx={'auto'} bg={'momo.300'} p={8}>
        <Heading fontSize={'x-large'} textAlign={'center'}>
          配信停止されました。
        </Heading>
        <Text mt={5} lineHeight={'2rem'}>
          ニュースレターの配信を停止しました。
          <Box as={'br'} />
          停止後もシステムの都合上、まれに行き違いで1回程度ニュースレターが届くことがございますが、正しく配信停止されておりますのでご安心ください。
        </Text>
      </Box>
    );
  }

  if (stopstatus === 'error') {
    return (
      <Box mx={'auto'} bg={'momo.300'} p={8}>
        <Heading fontSize={'x-large'} textAlign={'center'}>
          停止に失敗しました。
        </Heading>
        <Text mt={5} lineHeight={'2rem'}>
          申し訳ございません。
          <Box as={'br'} />
          サーバー障害等の理由により、ニュースレターの配信停止に失敗しました。下記のメールアドレス宛までお問い合わせいただけますと幸いです。
          <Box as={'br'} />
          <Box as={'br'} />
          合同会社ピーチウェブ
          <Box as={'br'} />
          irifune@peach-web.co.jp
        </Text>
      </Box>
    );
  }

  return (
    <Box as={'form'} onSubmit={handleSubmit(onStopSubmit)}>
      <Box as={'dl'} display={{ base: 'block', lg: 'flex' }} mt={4}>
        <Box as={'dt'} mt={5} fontSize={'large'} fontWeight={'bold'} w={220}>
          メールアドレス
          <Box as={'sup'} color={'momo.100'} ml={1}>
            ※
          </Box>
        </Box>
        <FormControl isInvalid={Boolean(errors.email)}>
          <Input
            type={'email'}
            id={'email'}
            placeholder={'sample@xxxx.com'}
            h={'60px'}
            w={'100%'}
            bg={'momo.300'}
            {...register('email', {
              required: 'メールアドレスを入力ください',
              maxLength: { value: 50, message: '50文字以内で入力してください' },
              pattern: {
                value: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/,
                message: 'メールアドレスをご入力してください',
              },
            })}
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box mt={4} display={'flex'} justifyContent={'center'}>
        <Checkbox size="lg" colorScheme={'pink'} onChange={handleCheckboxChange}>
          <Box as={'span'} fontWeight={'bold'} fontSize={'smaller'}>
            <Link href={'/privacy'} isExternal color={'momo.100'} textDecoration={'underline'}>
              プライバシーポリシー
            </Link>
            に同意する
          </Box>
        </Checkbox>
      </Box>
      <Box mt={8} display={'flex'} justifyContent={'center'}>
        <Button
          type={'submit'}
          borderRadius={'40px'}
          bg={'momo.100'}
          color={'white'}
          h={'56px'}
          w={'295px'}
          textDecoration={'none'}
          fontSize={'large'}
          fontWeight={'bold'}
          letterSpacing={2}
          _hover={{ bg: 'momo.100', color: 'white' }}
          isDisabled={!isStopChecked}
          isLoading={isSubmitting}
        >
          配信停止する
          <Icon as={MdOutlineKeyboardArrowRight} boxSize={'2rem'} />
        </Button>
      </Box>
    </Box>
  );
};
