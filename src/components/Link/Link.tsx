import { Link as LinkRouter } from "react-router-dom";

import { LinkProps } from "@/types/props";

import "@/components/Link/Link.css";

const Link = ({ id, href, target, ariaLabel, children, className }: LinkProps) => {
  return (
    <LinkRouter
      id={id}
      to={href}
      target={target ?? "_blank"}
      className={`link ${className ?? ""}`}
      aria-label={ariaLabel}
    >
      {children ?? ""}
    </LinkRouter>
  );
};

export default Link;
