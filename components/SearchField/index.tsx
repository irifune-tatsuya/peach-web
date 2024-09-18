'use client';

import { useCallback, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@chakra-ui/react';

type Props = { category: string };

export default function SearchField({ category }: Props) {
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        location.href = `/${category}/search?q=${inputRef.current?.value}`;
      }
    },
    [composing],
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('q') || '';
  return (
    <Input
      variant="flushed"
      maxW={300}
      pl={9}
      pr={3}
      bg={`url('/search.svg') no-repeat 10px center`}
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
}
