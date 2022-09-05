import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AccessHeader } from "../components/AccessHeader";
import { InputComponent } from "../components/InputComponent";
// import { SendAlert } from "../components/SendAlert";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: any) => {
    e.preventDefault();

    try {
      const user = await Auth.signIn(username, password);
      console.log(user);

      if (user?.signInUserSession?.idToken) {
        localStorage.setItem(
          "group",
          user.signInUserSession.idToken.payload["cognito:groups"]
        );
        navigate("/home");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const generateFormBlock = () => {
    return (
      <>
        <InputComponent
          inputType={"email"}
          inputPlaceholder="Insira seu e-mail"
          getInputValue={(e) => setUsername(e.target.value)}
        />

        <InputComponent
          inputType={"password"}
          inputPlaceholder="Insira sua senha"
          helperText="Esqueceu sua senha?"
          helperTextLink="/recovery/password"
          getInputValue={(e) => setPassword(e.target.value)}
        />
      </>
    );
  };

  return (
    <AccessHeader
      funcToActionForm={(e) => signIn(e)}
      registerShow={"Ou faça seu cadastro!"}
      registerLink={"/create/user"}
      headText="Faça seu Login"
      buttonText="Login"
      boxForm={generateFormBlock()}
    />
  );
};
