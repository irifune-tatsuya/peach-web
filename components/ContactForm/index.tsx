'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  Link,
  Textarea,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createContactData } from '@/app/_actions/contact';

type formInputs = {
  lastname: string;
  firstname: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
};

export const ContactForm: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<formInputs>();

  const onSubmit = handleSubmit((data) => {
    createContactData(data);
  });
  return (
    <Box as={'form'} maxW={960} mx={'auto'} onSubmit={onSubmit}>
      <Box as={'dl'} display={{ base: 'block', lg: 'flex' }}>
        <Box as={'dt'} mt={8} fontSize={'large'} fontWeight={'bold'} h={'44px'} w={315}>
          ご氏名
          <Box as={'sup'} color={'momo.100'} ml={1}>
            ※
          </Box>
        </Box>
        <Box as={'dd'} display={{ base: 'block', sm: 'flex' }} gap={{ base: 5, md: 10 }} w={'100%'}>
          <FormControl isInvalid={Boolean(errors.lastname)}>
            <Input
              type={'text'}
              id={'lastname'}
              placeholder={'姓'}
              h={76}
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
              h={76}
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
      <Box as={'dl'} display={{ base: 'block', lg: 'flex' }} mt={8}>
        <Box as={'dt'} mt={8} fontSize={'large'} fontWeight={'bold'} h={'44px'} w={315}>
          御社名
        </Box>
        <FormControl>
          <Input
            type={'text'}
            id={'company'}
            placeholder={'合同会社ピーチウェブ'}
            h={76}
            w={'100%'}
            bg={'momo.300'}
            {...register('company', {
              maxLength: { value: 50, message: '50文字以内で入力してください' },
            })}
          />
        </FormControl>
      </Box>
      <Box as={'dl'} display={{ base: 'block', lg: 'flex' }} mt={8}>
        <Box as={'dt'} mt={8} fontSize={'large'} fontWeight={'bold'} h={'44px'} w={315}>
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
            h={76}
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
      <Box as={'dl'} display={{ base: 'block', lg: 'flex' }} mt={8}>
        <Box as={'dt'} mt={8} fontSize={'large'} fontWeight={'bold'} h={'44px'} w={315}>
          電話番号
        </Box>
        <FormControl>
          <Input
            type={'text'}
            id={'phone'}
            placeholder={'000-0000-0000'}
            h={76}
            w={'100%'}
            bg={'momo.300'}
            {...register('phone', {
              maxLength: { value: 13, message: '13文字以内で入力してください' },
            })}
          />
        </FormControl>
      </Box>
      <Box as={'dl'} display={{ base: 'block', lg: 'flex' }} mt={8}>
        <Box as={'dt'} mt={8} fontSize={'large'} fontWeight={'bold'} h={'44px'} w={315}>
          お問い合わせ内容
          <Box as={'sup'} color={'momo.100'} ml={1}>
            ※
          </Box>
        </Box>
        <FormControl isInvalid={Boolean(errors.message)}>
          <Textarea
            id={'message'}
            placeholder={'ご入力ください'}
            h={230}
            w={'100%'}
            bg={'momo.300'}
            {...register('message', {
              required: 'お問い合わせ内容をご入力ください',
            })}
          />
          <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box mt={8} display={'flex'} justifyContent={'center'}>
        <Checkbox size="lg" colorScheme={'pink'} onChange={handleCheckboxChange}>
          <Box as={'span'} fontWeight={'bold'} fontSize={'smaller'}>
            <Link href={'/privacy'} isExternal color={'momo.100'} textDecoration={'underline'}>
              プライバシーポリシー
            </Link>
            に同意する
          </Box>
        </Checkbox>
      </Box>
      <Box mt={'60px'} display={'flex'} justifyContent={'center'}>
        <Button
          type={'submit'}
          w={'100%'}
          maxW={350}
          h={'80px'}
          borderRadius={'40px'}
          bg={'momo.100'}
          color={'white'}
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
