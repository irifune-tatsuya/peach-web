'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight } from 'lucide-react';
import { createStartMailMagazineData } from '@/app/_action/contact';
import { IMAGEBASEURL } from '@/constants';
import { startMailMagazineSchema, type StartMailMagazineValues } from '@/lib/schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export const StartMailMagazineForm: FC = () => {
  const [isStartChecked, setIsStartChecked] = useState(false);
  const [startstatus, setStartStatus] = useState<string | null>(null);

  const form = useForm<StartMailMagazineValues>({
    resolver: zodResolver(startMailMagazineSchema),
    defaultValues: {
      lastname: '',
      firstname: '',
      company: '',
      email: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onStartSubmit = async (data: StartMailMagazineValues) => {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onStartSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 lg:grid-cols-[220px_1fr]">
          {/* ご氏名 */}
          <FormLabel className="mt-5 text-lg font-bold">
            ご氏名<sup className="ml-1 text-momo-100">※</sup>
          </FormLabel>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="姓" {...field} className="h-14 border-0 bg-momo-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="名" {...field} className="h-14 border-0 bg-momo-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* 御社名 */}
          <FormLabel className="mt-5 text-lg font-bold">御社名</FormLabel>
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="合同会社ピーチウェブ"
                    {...field}
                    className="h-14 border-0 bg-momo-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* メールアドレス */}
          <FormLabel className="mt-5 text-lg font-bold">
            メールアドレス<sup className="ml-1 text-momo-100">※</sup>
          </FormLabel>
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
                    className="h-14 border-0 bg-momo-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center justify-center space-x-2 pt-2">
          <Checkbox
            id="terms"
            onCheckedChange={(checked) => setIsStartChecked(Boolean(checked))}
            className="border-momo-400"
          />
          <Label htmlFor="terms" className="text-sm font-bold">
            <Link href="/privacy" target="_blank" className="text-momo-100 underline">
              プライバシーポリシー
            </Link>
            に同意する
          </Label>
        </div>

        <div className="flex justify-center pt-4">
          <Button type="submit" size="lg" disabled={!isStartChecked || isSubmitting}>
            {isSubmitting ? '送信中...' : '登録する'}
            <ChevronRight className="!h-8 !w-8" />
          </Button>
        </div>
      </form>
    </Form>
  );
};
