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
import { createStartMailMagazineData } from '@/app/_action/contact';
import { IMAGEBASEURL } from '@/constants';

type startMailMagazineInputs = {
  lastname: string;
  firstname: string;
  company?: string;
  email: string;
};

export const StartMailMagazineForm: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<startMailMagazineInputs>();

  const onSubmit = async (data: startMailMagazineInputs) => {
    const result = await createStartMailMagazineData(data);
    setStatus(result);
  };

  if (status === 'succcess') {
    return (
      <Box mx={'auto'} bg={'momo.300'} p={8}>
        <Heading fontSize={'x-large'} textAlign={'center'}>
          登録完了！
        </Heading>
        <Text mt={5} lineHeight={'2rem'}>
          ニュースレターの登録が完了しました。
          <Box as={'br'} />
          登録メールアドレス宛にサンクスメールをお送りしました。正しく受け取れていることをご確認ください。
          <Box as={'br'} />
          引き続きピーチウェブを宜しくお願い致します。
        </Text>
        <Center>
          <Image
            src={`${IMAGEBASEURL}/common/square_logo.svg`}
            width={'200px'}
            height={'auto'}
            maxW={300}
            alt={'ピーチウェブロゴ'}
            loading={'lazy'}
          />
        </Center>
      </Box>
    );
  }

  if (status === 'error') {
    return (
      <Box mx={'auto'} bg={'momo.300'} p={8}>
        <Heading fontSize={'x-large'} textAlign={'center'}>
          送信が失敗しました。
        </Heading>
        <Text mt={5} lineHeight={'2rem'}>
          申し訳ございません。
          <Box as={'br'} />
          サーバー障害等の理由により、ニュースレターの登録送信に失敗しました。下記のメールアドレス宛までお問い合わせいただけますと幸いです。
          <Box as={'br'} />
          <Box as={'br'} />
          合同会社ピーチウェブ
          <Box as={'br'} />
          irifune@peach-web.co.jp
          <Box as={'br'} />
          引き続きピーチウェブを宜しくお願い致します。
        </Text>
        <Center>
          <Image
            src={`${IMAGEBASEURL}/common/square_logo.svg`}
            width={'200px'}
            height={'auto'}
            maxW={300}
            alt={'ピーチウェブロゴ'}
            loading={'lazy'}
          />
        </Center>
      </Box>
    );
  }

  return (
    <Box as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Box as={'dl'} display={{ base: 'block', lg: 'flex' }}>
        <Box as={'dt'} mt={5} fontSize={'large'} fontWeight={'bold'} w={220}>
          ご氏名
          <Box as={'sup'} color={'momo.100'} ml={1}>
            ※
          </Box>
        </Box>
        <Box as={'dd'} display={{ base: 'block', sm: 'flex' }} gap={{ base: 5, md: 5 }} w={'100%'}>
          <FormControl isInvalid={Boolean(errors.lastname)}>
            <Input
              type={'text'}
              id={'lastname'}
              placeholder={'姓'}
              h={'60px'}
              w={'100%'}
              bg={'momo.300'}
              {...register('lastname', {
                required: '性をご入力ください',
                maxLength: { value: 10, message: '10文字以内で入力してください' },
              })}
            />
            <FormErrorMessage>{errors.lastname && errors.lastname.message}</FormErrorMessage>
          </FormControl>
          <FormControl mt={{ base: 4, sm: 0 }} isInvalid={Boolean(errors.firstname)}>
            <Input
              type={'text'}
              id={'firstname'}
              placeholder={'名'}
              h={'60px'}
              w={'100%'}
              bg={'momo.300'}
              {...register('firstname', {
                required: '名をご入力ください',
                maxLength: { value: 10, message: '10文字以内で入力してください' },
              })}
            />
            <FormErrorMessage>{errors.firstname && errors.firstname.message}</FormErrorMessage>
          </FormControl>
        </Box>
      </Box>
      <Box as={'dl'} display={{ base: 'block', lg: 'flex' }} mt={4}>
        <Box as={'dt'} mt={5} fontSize={'large'} fontWeight={'bold'} w={220}>
          御社名
        </Box>
        <FormControl>
          <Input
            type={'text'}
            id={'company'}
            placeholder={'合同会社ピーチウェブ'}
            h={'60px'}
            w={'100%'}
            bg={'momo.300'}
            {...register('company', {
              maxLength: { value: 50, message: '50文字以内で入力してください' },
            })}
          />
        </FormControl>
      </Box>
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
          isDisabled={!isChecked}
          isLoading={isSubmitting}
        >
          送信する
          <Icon as={MdOutlineKeyboardArrowRight} boxSize={'2rem'} />
        </Button>
      </Box>
    </Box>
  );
};
