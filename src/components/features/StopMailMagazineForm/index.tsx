'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createStopMailMagazineData } from '@/app/_action/contact';
import { stopMailMagazineSchema, type StopMailMagazineValues } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
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
import { ChevronRight } from 'lucide-react';

export const StopMailMagazineForm: FC = () => {
  const [isStopChecked, setIsStopChecked] = useState(false);
  const [stopstatus, setStopStatus] = useState<string | null>(null);

  const form = useForm<StopMailMagazineValues>({
    resolver: zodResolver(stopMailMagazineSchema),
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onStopSubmit = async (data: StopMailMagazineValues) => {
    const result = await createStopMailMagazineData(data);
    setStopStatus(result);
  };

  if (stopstatus === 'succcess') {
    return (
      <Card className="bg-momo-300 p-4 text-center">
        <CardHeader>
          <CardTitle>配信停止されました。</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-loose">
            ニュースレターの配信を停止しました。
            <br />
            システムの都合上、まれに行き違いでニュースレターが届くことがございますが、正しく配信停止されておりますのでご安心ください。
          </p>
        </CardContent>
      </Card>
    );
  }

  if (stopstatus === 'error') {
    return (
      <Card className="bg-momo-300 p-4 text-center">
        <CardHeader>
          <CardTitle>停止に失敗しました。</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-loose">
            申し訳ございません。
            <br />
            サーバー障害等の理由により、配信停止に失敗しました。下記のメールアドレス宛までお問い合わせいただけますと幸いです。
            <br />
            <br />
            合同会社ピーチウェブ
            <br />
            irifune@peach-web.co.jp
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onStopSubmit)}>
        <div className="mt-4 items-start gap-x-4 lg:flex">
          <FormLabel className="mt-4 block text-lg font-bold lg:w-[220px]">
            メールアドレス<sup className="ml-1 text-momo-100">※</sup>
          </FormLabel>
          <div className="w-full">
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
                      className="h-[60px] w-full border-0 bg-momo-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center space-x-2">
          <Checkbox
            id="terms-stop"
            onCheckedChange={(checked) => setIsStopChecked(Boolean(checked))}
            className="border-momo-400"
          />
          <Label htmlFor="terms-stop" className="text-sm font-bold">
            <Link href={'/privacy'} target="_blank" className="text-momo-100 underline">
              プライバシーポリシー
            </Link>
            に同意する
          </Label>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            type="submit"
            size="lg"
            disabled={!isStopChecked || isSubmitting}
            variant="default"
            className="btn-slide-hover"
          >
            {isSubmitting ? '処理中...' : '配信停止する'}
            <ChevronRight className="!h-8 !w-8" />
          </Button>
        </div>
      </form>
    </Form>
  );
};
