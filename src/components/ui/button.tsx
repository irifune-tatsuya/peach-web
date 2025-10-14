import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-momo-100 text-white border-2 border-momo-100 hover:text-momo-100 btn-slide-hover',
        momo: 'bg-momo-100 text-white border-2 border-momo-100 hover:text-momo-100',
        secondary: 'bg-momo-200 border-2 border-momo-200 hover:text-momo-200 btn-slide-hover',
        line: 'bg-[#06c755] text-white border-2 border-[#06c755] hover:text-[#06c755] btn-slide-hover',
        facebook:
          'bg-[#1877f2] text-white border-2 border-[#1877f2] hover:text-[#1877f2] btn-slide-hover',
        x: 'bg-black text-white border-2 border-black hover:text-black btn-slide-hover',
        instagram:
          'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white border-2 border-pink-500 hover:text-pink-500 btn-slide-hover',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-13 px-8 py-2',
        sm: 'h-9 px-3',
        lg: 'h-14 px-10 text-xl font-bold tracking-widest',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
