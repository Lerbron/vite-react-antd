import React from "react";
import { BrowserRouter } from "react-router-dom";

import routes from "./routes";
import CoreLayout from "@/components/CoreLayout";

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <CoreLayout routes={routes} />
    </BrowserRouter>
  );
};

export default AppRoutes;
