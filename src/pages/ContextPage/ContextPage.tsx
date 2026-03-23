import Action from "@/components/Action/Action";
import Link from "@/components/Link/Link";

import { useCounterContext } from "@/hooks/useCounterContext";

import "@/pages/ContextPage/ContextPage.css";

const ContextPage = () => {
  const counterContext = useCounterContext();

  const addCounter = (value: number = 1): void => {
    counterContext.addCounter(value);
  };

  const subtractCounter = (value: number = 1): void => {
    counterContext.subtractCounter(value);
  };

  return (
    <main className="context-page">
      <h1 className="title">Context Page</h1>

      <div className="counter">
        <Action
          id="counter-subtract"
          ariaLabel="counter minus 1"
          className="counter__subtract"
          onClick={() => subtractCounter()}
        >
          -
        </Action>
        <h2 className="counter__number">{counterContext.counterState.counter}</h2>
        <Action
          id="counter-plus"
          ariaLabel="counter plus 1"
          className="counter__plus"
          onClick={() => addCounter()}
        >
          +
        </Action>
      </div>

      <div className="links">
        <Link id="link-not-exists" ariaLabel="link-not-exists" href="/pasdasdasdasd" target="_self">
          Go to Not Exists Page
        </Link>
      </div>
    </main>
  );
};

export default ContextPage;
