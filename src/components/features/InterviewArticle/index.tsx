'use client';

import { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaLine } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { House } from 'lucide-react';
import { formatRichText } from '@/lib/richtext';
import { renderToc } from '@/lib/render-toc';
import { Article } from '@/types/microcms';
import { IMAGEBASEURL } from '@/constants';
import { PublishedDate } from '@/components//ui/PublishedDate';
import { TableOfContents } from '@/components/common/TableOfContents';
import { StartMailMagazineForm } from '@/components/features/StartMailMagazineForm';
import { Button } from '@/components/ui/button';

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
      sns: data.peach_fight_details?.instagramid,
      href: `https://www.instagram.com/${data.peach_fight_details?.instagramid}?ref=badge`,
      variant: 'instagram',
      icon: <FaInstagram className="!h-10 !w-10" />,
    },
    {
      sns: data.peach_fight_details?.facebookurl,
      href: data.peach_fight_details?.facebookurl,
      variant: 'facebook',
      icon: <FaFacebookF className="!h-8 !w-8" />,
    },
    {
      sns: data.peach_fight_details?.xid,
      href: `https://twitter.com/${data.peach_fight_details?.xid}`,
      variant: 'x',
      icon: <FaXTwitter className="!h-8 !w-8" />,
    },
    {
      sns: data.peach_fight_details?.lineurl,
      href: data.peach_fight_details?.lineurl,
      variant: 'line',
      icon: <FaLine className="!h-10 !w-10" />,
    },
    {
      sns: data.peach_fight_details?.url,
      href: data.peach_fight_details?.url,
      variant: 'default',
      icon: <House className="!h-8 !w-8" />,
    },
  ] as const;

  return (
    <article className="mx-auto min-h-[calc(100vh-200px)] pb-[60px] md:max-w-[620px] md:pb-[156px]">
      <div>
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
        <div className="px-4 pt-8 pb-5 md:pt-20 md:pb-5">
          <h1 className="text-left text-2xl font-bold leading-normal md:text-4xl">{data.title}</h1>
          <div className="mt-5 flex flex-col items-end justify-end gap-3">
            {data.peach_fight_details?.instagramid && (
              <Button asChild variant="instagram" className="btn-slide-hover">
                <Link
                  href={`https://www.instagram.com/${data.peach_fight_details?.instagramid}?ref=badge`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center">
                    <FaInstagram className="!mr-2 !h-6 !w-6" />
                    {data.peach_fight_details?.interviewed}さんをフォロー
                  </span>
                </Link>
              </Button>
            )}
            <div className="flex justify-end gap-3">
              <Button asChild variant="facebook" className="flex-1 md:flex-none btn-slide-hover">
                <Link
                  href={`https://www.facebook.com/share.php?u=${fullPath}`}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <span className="relative z-10 flex items-center">
                    <FaFacebookF className="!mr-2 !h-5 !w-5" />
                    シェア
                  </span>
                </Link>
              </Button>
              <Button asChild variant="x" className="flex-1 md:flex-none btn-slide-hover">
                <Link
                  href={`https://x.com/share?url=${fullPath}&text=${data.title}&via=irifune333&related=${data.peach_fight_details?.xid}`}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <span className="relative z-10 flex items-center">
                    <FaXTwitter className="!mr-2 !h-5 !w-5" />
                    シェア
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {isShowToc && <TableOfContents toc={toc} />}

        {devidedContents.map((content, i) => (
          <React.Fragment key={i}>
            <div
              className="prose prose-base leading-9 mb-8 max-w-4xl px-4 prose-h2:inline-block prose-h2:border-b-2 prose-h2:border-[var(--color-momo-100)] prose-h2:pb-1 prose-h2:no-underline prose-h2:text-2xl prose-img:w-full prose-img:mx-auto prose-img:max-w-[400px]"
              dangerouslySetInnerHTML={{ __html: formatRichText(content) }}
            />
            {i < devidedContents.length - 1 &&
              (data.peach_fight_details?.instagramid ||
                data.peach_fight_details?.facebookurl ||
                data.peach_fight_details?.xid ||
                data.peach_fight_details?.lineurl ||
                data.peach_fight_details?.url) && (
                <div className="px-4 pt-8 pb-32">
                  <div className="mx-auto max-w-2xl rounded-2xl bg-momo-300 p-6 text-center shadow-lg md:p-8">
                    <p>
                      <span className="block font-bold md:text-2xl">
                        {data.peach_fight_details?.interviewed}さん
                      </span>
                      <span className="block text-gray-500">アカウントフォローはこちら</span>
                    </p>
                    <div className="mt-6 flex justify-center">
                      <div className="inline-grid grid-cols-3 gap-4 md:flex md:flex-row">
                        {interviewedSNSLinks.map((link, j) => (
                          <div key={j}>
                            {link.sns ? (
                              <Button
                                asChild
                                variant={link.variant}
                                size="icon"
                                className="h-14 w-14 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg btn-slide-hover"
                              >
                                <a href={link.href || ''} target="_blank" rel="noopener noreferrer">
                                  {link.icon}
                                </a>
                              </Button>
                            ) : (
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-14 w-14 rounded-lg"
                                disabled
                              >
                                {link.icon}
                              </Button>
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
