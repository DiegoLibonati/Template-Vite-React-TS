import { HashRouter } from "react-router-dom";

import { TemplateRouter } from "@/router/TemplateRouter";

function App() {
  return (
    <HashRouter>
      <TemplateRouter></TemplateRouter>
    </HashRouter>
  );
}

export default App;
