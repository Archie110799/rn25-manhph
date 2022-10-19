import React from "react";
import PrivateRouter from "./PrivateRouter";
import { BrowserRouter } from "react-router-dom";

function MagicRouter() {
  return (
    <BrowserRouter>
      <PrivateRouter />
    </BrowserRouter>
  );
}

export default MagicRouter;
