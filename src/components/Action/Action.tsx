import type { ActionProps } from "@/types/props";

import "@/components/Action/Action.css";

const Action = ({ id, ariaLabel, children, className, onClick }: ActionProps) => {
  return (
    <button
      id={id}
      type="button"
      aria-label={ariaLabel}
      className={["action", className].filter(Boolean).join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Action;
