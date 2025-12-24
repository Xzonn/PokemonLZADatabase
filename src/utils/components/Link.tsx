"use client";

import cn from "classnames";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, ...rest }) => {
  const pathname = usePathname();

  if (to.toString().startsWith("https://") || to.toString().startsWith("http://")) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={to.toString()}
        className={cn("whitespace-nowrap", className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const current = decodeURIComponent(pathname);

  if (to === current) {
    // render plain text when target equals current URL
    return (
      <span className={cn("whitespace-nowrap", className)} aria-current="page" {...rest}>
        {children}
      </span>
    );
  }

  // otherwise render a Next.js Link
  return (
    <NextLink href={to} className={cn("whitespace-nowrap", className)} {...rest}>
      {children}
    </NextLink>
  );
};
