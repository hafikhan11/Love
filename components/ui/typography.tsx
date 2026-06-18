import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p className={cn('text-base leading-8 text-slate-700', className)} {...props}>
      {children}
    </p>
  );
}

export function SectionTitle({ className, children, ...props }: TitleProps) {
  return (
    <h2 className={cn('text-2xl font-semibold text-slate-900', className)} {...props}>
      {children}
    </h2>
  );
}
