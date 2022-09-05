import { Routes, Route } from "react-router-dom";

import { Login } from "../screens/login";
import { ForgotPass } from "../screens/recoveryPass";
import { ChangePass } from "../screens/changePass";
import { RegisterUser } from "../screens/registerUser";
import { Home } from "../screens/home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/recovery/password" element={<ForgotPass />} />
      <Route path="/change/password" element={<ChangePass />} />
      <Route path="/create/user" element={<RegisterUser />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
