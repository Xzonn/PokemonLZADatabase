import React from "react";
import { Link as RouterLink, useLocation, useResolvedPath, LinkProps } from "react-router-dom";
import cn from "classnames";

const Link: React.FC<LinkProps> = ({ to, children, className, ...rest }) => {
  const location = useLocation();
  const resolved = useResolvedPath(to);

  const target = resolved.pathname;
  const current = decodeURIComponent(location.pathname);

  if (target === current) {
    // render plain text when target equals current URL
    return (
      <span
        className={className}
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
      className={cn("text-blue-600", className)}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
