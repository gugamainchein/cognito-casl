import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";

import { AppRoutes } from "./routes";
import { config } from "./aws-exports";
import { GuardContext } from "./guards/GuardContext";
import { getAbilitiesByUser } from "./guards/userAbilities";
import { buildAbility } from "./guards/ability";
Amplify.configure(config);

export const App = () => {
  const userAbilities = getAbilitiesByUser();
  const ability = buildAbility(userAbilities);

  return (
    <GuardContext.Provider value={ability}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GuardContext.Provider>
  );
};
