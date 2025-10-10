'use client';

import { FC } from 'react';
import { useCallback, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { IMAGEBASEURL } from '@/constants';

type Props = { category: string };

export const SearchField: FC<Props> = ({ category }) => {
  const router = useRouter();
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);

  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        e.preventDefault();
        const query = inputRef.current?.value || '';
        router.push(`/${category}/search?q=${query}`);
      }
    },
    [composing, category, router],
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('q') || '';

  return (
    <Input
      className={`max-w-[300px] rounded-none border-0 border-b-2 bg-no-repeat bg-[10px_center] pl-9 pr-3 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0`}
      style={{
        backgroundImage: `url('${IMAGEBASEURL}/search.svg')`,
      }}
      type="search"
      name="q"
      ref={inputRef}
      placeholder="こちらから記事を検索できます"
      onKeyDown={_onEnter}
      onCompositionStart={startComposition}
      onCompositionEnd={endComposition}
      defaultValue={defaultQuery}
    />
  );
};
