import cn from "classnames";
import React from "react";
import { Link as RouterLink, LinkProps, useLocation, useResolvedPath } from "react-router-dom";

export const Link: React.FC<LinkProps> = ({ to, children, className, ...rest }) => {
  const location = useLocation();
  const resolved = useResolvedPath(to);

  const target = resolved.pathname;
  const current = decodeURIComponent(location.pathname);

  if (target === current) {
    // render plain text when target equals current URL
    return (
      <span
        className={cn("whitespace-nowrap", className)}
        aria-current="page"
      >
        {children}
      </span>
    );
  }

  // otherwise render a react-router Link
  return (
    <RouterLink
      to={to}
      className={cn("text-blue-600", "whitespace-nowrap", className)}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};
