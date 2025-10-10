'use client';

import { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaLine } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdHome } from 'react-icons/io';
import { formatRichText } from '@/lib/richtext';
import { renderToc } from '@/lib/render-toc';
import { type Article } from '@/lib/microcms';
import { IMAGEBASEURL } from '@/constants';
import { PublishedDate } from '../../ui/PublishedDate';
import { TableOfContents } from '@/components/common/TableOfContents';
import { StartMailMagazineForm } from '@/components/features/StartMailMagazineForm';

type Props = {
  data: Article;
  isShowToc?: boolean;
};

export const InterviewArticle: FC<Props> = ({ data, isShowToc = true }) => {
  const toc = renderToc(data.content);
  const pathName = usePathname();
  const fullPath = `${process.env.NEXT_PUBLIC_BASE_URL}${pathName}`;

  const devidedContents = data.content
    .split(/<h2/g)
    .filter(Boolean)
    .map((section) => (section.startsWith('<') ? section : `<h2${section}`));

  const interviewedSNSLinks = [
    {
      sns: data.instagramid,
      href: `https://www.instagram.com/${data.instagramid}?ref=badge`,
      bg: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
      icon: <FaInstagram size={32} color="white" />,
    },
    {
      sns: data.facebookurl,
      href: data.facebookurl,
      bg: 'bg-[#1877f2]',
      icon: <FaFacebookF size={26} color="white" />,
    },
    {
      sns: data.xid,
      href: `https://twitter.com/${data.xid}`,
      bg: 'bg-black',
      icon: <FaXTwitter size={24} color="white" />,
    },
    {
      sns: data.lineurl,
      href: data.lineurl,
      bg: 'bg-white',
      icon: <FaLine size={45} color="#06c755" />,
    },
    {
      sns: data.url,
      href: data.url,
      bg: 'bg-[var(--color-momo-100)]',
      icon: <IoMdHome size={30} color="white" />,
    },
  ];

  return (
    <article>
      <div className="mx-auto min-h-[calc(100vh-200px)] max-w-4xl pb-4 md:pb-40">
        {data.thumbnail ? (
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            width={data.thumbnail.width}
            height={data.thumbnail.height}
            className="h-auto w-full"
            priority
          />
        ) : (
          <Image
            src={`${IMAGEBASEURL}/no-image.webp`}
            alt="No Image"
            width={620}
            height={349}
            className="h-auto w-full"
          />
        )}

        <div className="mt-8 border-t border-black px-4 pt-8 pb-5 md:pt-20 md:pb-5">
          <h1 className="text-left text-2xl font-bold leading-normal md:text-4xl">{data.title}</h1>
          <div className="mt-5 flex flex-col items-stretch justify-end gap-3 md:flex-row md:items-center">
            {data.instagramid && (
              <Link
                href={`https://www.instagram.com/${data.instagramid}?ref=badge`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 font-bold text-white transition-opacity hover:opacity-70"
              >
                <FaInstagram size={32} color="white" />
                <span className="ml-1">{`${data.interviewed}さんをフォロー`}</span>
              </Link>
            )}
            <div className="flex gap-3">
              <Link
                href={`https://www.facebook.com/share.php?u=${fullPath}`}
                target="_blank"
                rel="nofollow noopener"
                className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[#1877f2] px-3 font-bold text-white transition-opacity hover:opacity-70 md:flex-none"
              >
                <FaFacebookF size={26} color="white" />
                <span className="ml-1">記事をシェア</span>
              </Link>
              <Link
                href={`https://x.com/share?url=${fullPath}&text=${data.title}&via=irifune333&related=${data.xid}`}
                target="_blank"
                rel="nofollow noopener"
                className="flex h-12 flex-1 items-center justify-center rounded-lg bg-black px-3 font-bold text-white transition-opacity hover:opacity-70 md:flex-none"
              >
                <FaXTwitter size={24} color="white" />
                <span className="ml-1">記事をシェア</span>
              </Link>
            </div>
          </div>
        </div>

        {isShowToc && <TableOfContents toc={toc} />}

        {devidedContents.map((content, i) => (
          <React.Fragment key={i}>
            <div
              className="prose prose-lg mb-8 max-w-none px-4 prose-h2:inline-block prose-h2:border-b-2 prose-h2:border-[var(--color-momo-100)] prose-h2:pb-1 prose-h2:no-underline"
              dangerouslySetInnerHTML={{ __html: formatRichText(content) }}
            />
            {i < devidedContents.length - 1 &&
              (data.instagramid || data.facebookurl || data.xid || data.lineurl || data.url) && (
                <div className="px-4 pt-8 pb-32">
                  <div className="mx-auto max-w-2xl rounded-2xl bg-momo-600 p-6 text-center shadow-lg md:p-8">
                    <p className="text-xl font-bold text-momo-100 md:text-2xl">
                      {`${data.interviewed}さんをフォロー`}
                    </p>
                    <div className="mt-6 flex justify-center">
                      <div className="inline-grid grid-cols-3 gap-4 md:flex md:flex-row">
                        {interviewedSNSLinks.map((link, j) => (
                          <div key={j}>
                            {link.sns ? (
                              <Link
                                href={link.href || ''}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${link.bg}`}
                              >
                                {link.icon}
                              </Link>
                            ) : (
                              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
                                {interviewedSNSLinks[j].icon}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-center text-xs text-gray-600 md:text-sm">
                    ※ 一方的な営業・勧誘目的で連絡を取るのはお控えください。
                  </p>
                </div>
              )}
          </React.Fragment>
        ))}

        <div className="mb-20 flex justify-end px-8 text-lg">
          <PublishedDate date={data.publishedAt || data.createdAt} simple={true} />
          <p className="ml-1">公開</p>
        </div>

        <div className="px-4">
          <h2 className="text-2xl font-bold">次の記事更新はいつ？</h2>
          <p className="mb-10">
            ニュースレターを登録してピーチウェブの最新情報をいち早く手に入れてください！もちろん、
            <span className="font-bold text-[var(--color-momo-100)]">
              登録無料でいつでも解約可能
            </span>
            ですのでご安心ください。
          </p>
          <StartMailMagazineForm />
        </div>
      </div>
    </article>
  );
};
