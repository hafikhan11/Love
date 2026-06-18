import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: 'primary' | 'secondary';
};

const variants = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-petal-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-petal-700 focus:outline-none focus:ring-2 focus:ring-petal-400',
  secondary:
    'inline-flex items-center justify-center rounded-full border border-petal-200 bg-white px-6 py-3 text-sm font-semibold text-petal-700 transition hover:bg-petal-100 focus:outline-none focus:ring-2 focus:ring-petal-200',
};

export function Button({ className, variant = 'primary', href, children, ...props }: ButtonProps) {
  return (
    <Link href={href ?? '#'} className={`${variants[variant]} ${className ?? ''}`} {...props}>
      {children}
    </Link>
  );
}
