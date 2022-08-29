import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import { Amplify } from "aws-amplify";
import { config } from "./aws-exports";
Amplify.configure(config);

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
