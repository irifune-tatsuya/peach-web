'use client';

import { cn } from '@/lib/utils';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';

type CustomImageProps = Omit<NextImageProps, 'width' | 'height' | 'style' | 'fill'> & {
  wrapperClassName?: string;
};

const CustomImage: React.FC<CustomImageProps> = ({ wrapperClassName, ...imageProps }) => {
  return (
    <div className={cn('relative', wrapperClassName)}>
      <NextImage {...imageProps} fill sizes={imageProps.sizes || '100vw'} />
    </div>
  );
};

export default CustomImage;
