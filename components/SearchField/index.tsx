'use client';

import { useCallback, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './index.module.css';
import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react';

export default function SearchField() {
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
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
      maxW={250}
      type="search"
      name="q"
      ref={inputRef}
      className={styles.search}
      placeholder="こちらから記事を検索できます"
      onKeyDown={_onEnter}
      onCompositionStart={startComposition}
      onCompositionEnd={endComposition}
      defaultValue={defaultQuery}
    />
  );
}
