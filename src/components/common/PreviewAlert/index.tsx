'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import React from 'react';

export const PreviewAlert: FC = () => {
  const handleExitPreview = () => {
    fetch('/api/disable-preview');
    window.close();
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-auto bg-pink-300 border rounded-lg shadow-lg p-3 flex items-center justify-center gap-4 z-50">
      <p className="text-sm text-black font-medium">プレビューモードで表示中</p>
      <Button
        variant="default"
        className="!bg-white !text-pink-700 hover:!bg-white/90 focus-visible:!ring-pink-400 !px-3 btn-slide-hover"
        onClick={handleExitPreview}
      >
        プレビューを終了
      </Button>
    </div>
  );
};
