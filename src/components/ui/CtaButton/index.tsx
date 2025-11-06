import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ctaButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-momo-100 text-white border-2 border-momo-100 hover:bg-white hover:text-momo-100',
        secondary:
          'bg-momo-300 text-foreground border-2 border-momo-300 hover:border-foreground hover:bg-white',
        gradient:
          'bg-gradient-to-r from-momo-100 to-momo-200 text-white shadow-xl hover:shadow-2xl hover:brightness-105 active:scale-98',
        outline:
          'border-2 border-momo-100 bg-transparent text-momo-100 shadow-md hover:bg-momo-50 hover:text-momo-200 active:scale-98',
        customHover: `
          relative overflow-hidden z-10
          bg-momo-100 text-white
          border-2 border-momo-100
          shadow-lg
          transition-colors duration-300 ease-out
          before:content-[''] before:absolute before:inset-0
          before:bg-white before:scale-x-0 before:origin-left
          before:transition-transform before:duration-500 before:ease-in-out
          before:-z-10
          hover:text-momo-100
          hover:before:scale-x-100
          active:scale-98
        `,
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-md px-6 text-base',
        xl: 'h-14 rounded-md px-8 text-lg font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  },
);

export interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean;
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Button;
    return (
      <Comp
        className={cn(ctaButtonVariants({ variant, size, className }), 'rounded-full')}
        ref={ref}
        {...props}
      />
    );
  },
);
CtaButton.displayName = 'CtaButton';

export { CtaButton, ctaButtonVariants };
