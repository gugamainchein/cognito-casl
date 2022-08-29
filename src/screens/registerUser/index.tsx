import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router";

import { AccessHeader } from "../components/AccessHeader";
import { InputComponent } from "../components/InputComponent";
// import { SendAlert } from "../components/SendAlert";

export const RegisterUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showInputCode, setShowInputCode] = useState(false);
  const [code, setCode] = useState("");

  const register = async (e: any) => {
    e.preventDefault();

    try {
      if (showInputCode === false) {
        try {
          await Auth.signUp({
            username,
            password,
            attributes: { email: username },
            autoSignIn: { enabled: true },
          });
        } catch (error) {
          await Auth.resendSignUp(username);
        }

        return setShowInputCode(true);
      } else {
        await Auth.confirmSignUp(username, code);
      }

      navigate("/login");
    } catch (error) {
      console.log("error:", error);
    }
  };

  const generateFormBlock = () => {
    return (
      <>
        {showInputCode === true ? (
          <InputComponent
            inputType={"text"}
            inputPlaceholder="Insira código enviado"
            getInputValue={(e) => setCode(e.target.value)}
          />
        ) : (
          <>
            <InputComponent
              inputType={"email"}
              inputPlaceholder="Insira seu e-mail"
              getInputValue={(e) => setUsername(e.target.value)}
            />
            <InputComponent
              inputType={"password"}
              inputPlaceholder="Insira sua senha"
              helperTextLink="/recovery/password"
              getInputValue={(e) => setPassword(e.target.value)}
            />
          </>
        )}
      </>
    );
  };

  return (
    <AccessHeader
      funcToActionForm={(e) => register(e)}
      registerShow={"Ou faça seu login!"}
      registerLink={"/login"}
      headText="Faça seu Cadatro"
      buttonText="Me Cadastrar"
      boxForm={generateFormBlock()}
    />
  );
};
