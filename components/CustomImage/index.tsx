'use client';

import { Box, BoxProps } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type CustomImageProps = BoxProps & Omit<NextImageProps, 'width' | 'height' | 'style'>;

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  priority = false,
  sizes,
  ...rest
}) => {
  return (
    <Box position="relative" {...rest}>
      <NextImage src={src} alt={alt} fill priority={priority} sizes={sizes || '100vw'} />
    </Box>
  );
};

export default CustomImage;
