"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to?: string;
  href?: string | object;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    const pathname = useLocation().pathname;
    const target = (to || href || "") as any;
    const isActive = pathname === target;
    const isPending = false;
    return (
      <Link
        ref={ref}
        to={target}
        className={cn(className, isActive && activeClassName, isPending && pendingClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
