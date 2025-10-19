'use client';

import { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { formatRichText } from '@/lib/richtext';
import { renderToc } from '@/lib/render-toc';
import { type Article as ArticleType } from '@/types/microcms';
import { IMAGEBASEURL } from '@/constants';
import { PublishedDate } from '@/components/ui/PublishedDate';
import { TableOfContents } from '@/components/common/TableOfContents';
import { StartMailMagazineForm } from '@/components/features/StartMailMagazineForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';

type Props = {
  data: ArticleType;
  isShowToc?: boolean;
  isFaqLayout?: boolean;
};

export const Article: FC<Props> = ({ data, isShowToc = true, isFaqLayout = false }) => {
  const toc = renderToc(data.content);
  const pathName = usePathname();
  const fullPath = `${process.env.NEXT_PUBLIC_BASE_URL}${pathName}`;

  return (
    <article className="mx-auto min-h-[calc(100vh-200px)] pb-[60px] md:max-w-[620px] md:pb-[156px]">
      {!isFaqLayout && (
        <>
          {data.thumbnail ? (
            <Image
              src={data.thumbnail.url}
              alt={data.title}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              className="h-auto w-full max-w-[620px]"
              priority
            />
          ) : (
            <Image
              src={`${IMAGEBASEURL}/no-image.webp`}
              alt={'No Image'}
              width={620}
              height={349}
              className="h-auto w-full max-w-[620px]"
            />
          )}
        </>
      )}
      <h1 className="mb-5 mt-[30px] px-4 text-left text-2xl font-bold leading-normal md:mt-[72px]">
        {data.title}
      </h1>
      {!isFaqLayout && (
        <>
          <div className="mb-9 flex h-[37px] items-center justify-between px-4">
            <div className="flex items-center">
              <Image
                src={`${IMAGEBASEURL}/article/momo-icon.webp`}
                alt={'ピーチウェブアイコン'}
                width={37}
                height={37}
                className="rounded-full"
              />
              <div className="ml-2 flex flex-col text-sm">
                <span>合同会社ピーチウェブ</span>
                <PublishedDate date={data.publishedAt || data.createdAt} simple={true} />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button asChild variant="facebook" size="icon">
                <Link
                  href={`https://www.facebook.com/share.php?u=${fullPath}`}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <FaFacebookF className="!h-5 !w-5" />
                </Link>
              </Button>
              <Button asChild variant="x" size="icon">
                <Link
                  href={`https://x.com/share?url=${fullPath}&text=${data.title}&via=irifune333`}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <FaXTwitter className="!h-5 !w-5" />
                </Link>
              </Button>
            </div>
          </div>
          {isShowToc && <TableOfContents toc={toc} />}
        </>
      )}

      <div
        className="prose prose-base leading-9 mb-20 px-4 prose-h2:inline-block prose-h2:border-b-2 prose-h2:border-[var(--color-momo-100)] prose-h2:pb-1 prose-h2:no-underline prose-h2:text-2xl prose-img:w-full prose-img:mx-auto prose-img:max-w-[400px]"
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
      <div className="px-4">
        <h2 className="text-2xl font-bold inline-block border-b-4 border-momo-100 pb-1">
          次の記事更新はいつ？
        </h2>
        <p className="mt-3 mb-10">
          ニュースレターを登録してピーチウェブの最新情報をいち早く手に入れてください！もちろん、
          <span className="font-bold text-momo-100">登録無料でいつでも解約可能</span>
          ですのでご安心ください。
        </p>
        <StartMailMagazineForm />
      </div>
    </article>
  );
};
