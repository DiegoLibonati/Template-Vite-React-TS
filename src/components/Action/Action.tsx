import type { ActionProps } from "@/types/props";

import "@/components/Action/Action.css";

const Action = ({ id, ariaLabel, children, className, onClick }: ActionProps) => {
  return (
    <button
      id={id}
      aria-label={ariaLabel}
      className={`action ${className ?? ""}`}
      onClick={onClick}
    >
      {children ?? ""}
    </button>
  );
};

export default Action;
