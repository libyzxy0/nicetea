import { cn } from '@/lib/utils'
import React from 'react'

type PropsWithChildren = {
  children: React.ReactNode;
  className?: string;
}

export const GlowBackground = ({ children, className }: PropsWithChildren) => (
  <div className="relative">
    <div
    className={cn(`absolute inset-0 z-0`, className)}
    style={{
    background: `linear-gradient(120deg, #e7e7e7 40%, #fee7de 70%, #e4e4e4 100%)`,
    }}
    />
      <div className="relative z-10 h-full">{children}</div>
  </div>
);