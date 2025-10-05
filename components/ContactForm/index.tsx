'use client';

import { NextPage } from 'next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { createContactData } from '@/app/_action/contact';
import { IMAGEBASEURL } from '@/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { contactFormSchema } from '@/lib/schema';

export const ContactForm: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      lastname: '',
      firstname: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    const result = await createContactData(data);
    setStatus(result);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 送信成功時の表示
  if (status === 'succcess') {
    return (
      <div className="mx-auto max-w-[960px] bg-momo-300 py-20 text-lg font-medium leading-loose">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Image
            src={`${IMAGEBASEURL}/common/square_logo.svg`}
            width={200}
            height={200}
            alt={'ピーチウェブロゴ'}
          />
          <p className="mt-10 text-center md:mt-0">
            お問い合わせいただき、
            <br className="md:hidden" />
            ありがとうございます。
            <br className="md:hidden" />
            <br />
            お返事まで今しばらくお待ち下さい。
            <br />
            <br />
            合同会社ピーチウェブ
          </p>
        </div>
      </div>
    );
  }

  // 送信失敗時の表示
  if (status === 'error') {
    return (
      <div className="mx-auto max-w-[960px] bg-momo-300 px-4 py-20 text-lg font-medium leading-loose">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Image
            src={`${IMAGEBASEURL}/common/square_logo.svg`}
            width={200}
            height={200}
            alt={'ピーチウェブロゴ'}
          />
          <p className="mt-10 text-center md:mt-0">
            申し訳ございません。
            <br />
            お問い合わせの送信に失敗しました。
            <br className="md:hidden" />
            <br />
            再度お問い合わせをいただくか
            <br className="hidden md:block" />
            以下までご連絡をお願いいたします。
            <br />
            <br />
            合同会社ピーチウェブ
            <br />
            irifune@peach-web.co.jp
          </p>
        </div>
      </div>
    );
  }

  // フォーム本体
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-[960px]">
        {/* ご氏名 */}
        <dl className="mt-8 lg:flex">
          <dt className="mt-8 h-[44px] w-full text-lg font-bold lg:w-[315px]">
            ご氏名
            <sup className="ml-1 text-momo-100">※</sup>
          </dt>
          <dd className="w-full gap-5 sm:flex md:gap-10">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="姓" {...field} className="h-[76px] bg-momo-300 border-0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem className="mt-4 w-full sm:mt-0">
                  <FormControl>
                    <Input placeholder="名" {...field} className="h-[76px] bg-momo-300 border-0" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </dd>
        </dl>

        {/* 御社名 */}
        <dl className="mt-8 lg:flex">
          <dt className="mt-8 h-[44px] w-full text-lg font-bold lg:w-[315px]">御社名</dt>
          <dd className="w-full">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="合同会社ピーチウェブ"
                      {...field}
                      className="h-[76px] bg-momo-300 border-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </dd>
        </dl>

        {/* メールアドレス */}
        <dl className="mt-8 lg:flex">
          <dt className="mt-8 h-[44px] w-full text-lg font-bold lg:w-[315px]">
            メールアドレス
            <sup className="ml-1 text-momo-100">※</sup>
          </dt>
          <dd className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="sample@xxxx.com"
                      {...field}
                      className="h-[76px] bg-momo-300 border-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </dd>
        </dl>

        {/* 電話番号 */}
        <dl className="mt-8 lg:flex">
          <dt className="mt-8 h-[44px] w-full text-lg font-bold lg:w-[315px]">電話番号</dt>
          <dd className="w-full">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="000-0000-0000"
                      {...field}
                      className="h-[76px] bg-momo-300 border-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </dd>
        </dl>

        {/* お問い合わせ内容 */}
        <dl className="mt-8 lg:flex">
          <dt className="mt-8 h-[44px] w-full text-lg font-bold lg:w-[315px]">
            お問い合わせ内容
            <sup className="ml-1 text-momo-100">※</sup>
          </dt>
          <dd className="w-full">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="ご入力ください"
                      {...field}
                      className="h-[230px] bg-momo-300 border-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </dd>
        </dl>

        {/* 同意チェック */}
        <div className="mt-8 flex items-center justify-center space-x-2">
          <Checkbox
            id="terms"
            onCheckedChange={(checked) => setIsChecked(Boolean(checked))}
            className="border-momo-300"
          />
          <label htmlFor="terms" className="text-sm font-bold">
            <Link href={'/privacy'} target="_blank" className="text-momo-100 underline">
              プライバシーポリシー
            </Link>
            に同意する
          </label>
        </div>

        {/* 送信ボタン */}
        <div className="mt-[60px] flex justify-center">
          <Button
            type="submit"
            disabled={!isChecked || isSubmitting}
            className="h-[80px] w-full max-w-[350px] rounded-full bg-momo-100 text-lg font-bold tracking-widest text-white hover:bg-momo-100/90"
          >
            {isSubmitting ? '送信中...' : '送信する'}
            <MdOutlineKeyboardArrowRight className="ml-1 h-8 w-8" />
          </Button>
        </div>
      </form>
    </Form>
  );
};
