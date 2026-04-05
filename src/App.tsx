import type { JSX } from "react";

import { HashRouter } from "react-router-dom";

import { TemplateRouter } from "@/router/TemplateRouter";

function App(): JSX.Element {
  return (
    <HashRouter>
      <TemplateRouter></TemplateRouter>
    </HashRouter>
  );
}

export default App;
