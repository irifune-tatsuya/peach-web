'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { createStartMailMagazineData } from '@/app/_action/contact';
import { IMAGEBASEURL } from '@/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type startMailMagazineInputs = {
  lastname: string;
  firstname: string;
  company?: string;
  email: string;
};

export const StartMailMagazineForm: React.FC = () => {
  const [isStartChecked, setIsStartChecked] = useState(false);
  const [startstatus, setStartStatus] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<startMailMagazineInputs>();

  const onStartSubmit = async (data: startMailMagazineInputs) => {
    const result = await createStartMailMagazineData(data);
    setStartStatus(result);
  };

  if (startstatus === 'succcess') {
    return (
      <Card className="bg-[var(--color-momo-300)] p-4 text-center">
        <CardHeader>
          <CardTitle>登録完了！</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-loose">
            ニュースレターの登録が完了しました。
            <br />
            登録メールアドレス宛にサンクスメールをお送りしました。正しく受け取れていることをご確認ください。
            <br />
            引き続きピーチウェブを宜しくお願い致します。
          </p>
          <Image
            src={`${IMAGEBASEURL}/common/square_logo.svg`}
            width={200}
            height={200}
            alt={'ピーチウェブロゴ'}
            className="mx-auto"
          />
        </CardContent>
      </Card>
    );
  }

  if (startstatus === 'error') {
    return (
      <Card className="bg-[var(--color-momo-300)] p-4 text-center">
        <CardHeader>
          <CardTitle>送信が失敗しました。</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-loose">
            申し訳ございません。サーバー障害等の理由により、ニュースレターの登録送信に失敗しました。
            <br />
            下記のメールアドレス宛までお問い合わせいただけますと幸いです。
            <br />
            <br />
            合同会社ピーチウェブ
            <br />
            irifune@peach-web.co.jp
          </p>
          <Image
            src={`${IMAGEBASEURL}/common/square_logo.svg`}
            width={200}
            height={200}
            alt={'ピーチウェブロゴ'}
            className="mx-auto"
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onStartSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 lg:grid-cols-[220px_1fr]">
        <Label htmlFor="lastname" className="mt-5 text-lg font-bold">
          ご氏名<sup className="ml-1 text-[var(--color-momo-100)]">※</sup>
        </Label>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Input
              id="lastname"
              placeholder="姓"
              className="h-14 bg-[var(--color-momo-300)] border-0"
              {...register('lastname', {
                required: '性をご入力ください',
                maxLength: { value: 10, message: '10文字以内で入力してください' },
              })}
            />
            {errors.lastname && (
              <p className="mt-1 text-sm text-red-500">{errors.lastname.message}</p>
            )}
          </div>
          <div>
            <Input
              id="firstname"
              placeholder="名"
              className="h-14 bg-[var(--color-momo-300)] border-0"
              {...register('firstname', {
                required: '名をご入力ください',
                maxLength: { value: 10, message: '10文字以内で入力してください' },
              })}
            />
            {errors.firstname && (
              <p className="mt-1 text-sm text-red-500">{errors.firstname.message}</p>
            )}
          </div>
        </div>

        <Label htmlFor="company" className="mt-5 text-lg font-bold">
          御社名
        </Label>
        <div>
          <Input
            id="company"
            placeholder="合同会社ピーチウェブ"
            className="h-14 bg-[var(--color-momo-300)] border-0"
            {...register('company', {
              maxLength: { value: 50, message: '50文字以内で入力してください' },
            })}
          />
        </div>

        <Label htmlFor="email" className="mt-5 text-lg font-bold">
          メールアドレス<sup className="ml-1 text-[var(--color-momo-100)]">※</sup>
        </Label>
        <div>
          <Input
            id="email"
            type="email"
            placeholder="sample@xxxx.com"
            className="h-14 bg-[var(--color-momo-300)] border-0"
            {...register('email', {
              required: 'メールアドレスを入力ください',
              pattern: {
                value: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/,
                message: 'メールアドレスの形式が正しくありません',
              },
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 pt-2">
        <Checkbox
          id="terms"
          onCheckedChange={(checked) => setIsStartChecked(Boolean(checked))}
          className="border-momo-400"
        />
        <Label htmlFor="terms" className="text-sm font-bold">
          <Link href="/privacy" target="_blank" className="text-[var(--color-momo-100)] underline">
            プライバシーポリシー
          </Link>
          に同意する
        </Label>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          className="h-14 w-72 rounded-full bg-[var(--color-momo-100)] text-lg font-bold text-white letter-spacing-2 hover:bg-[var(--color-momo-100)]/90"
          disabled={!isStartChecked || isSubmitting}
        >
          {isSubmitting ? '送信中...' : '登録する'}
          <MdOutlineKeyboardArrowRight size="2rem" />
        </Button>
      </div>
    </form>
  );
};
