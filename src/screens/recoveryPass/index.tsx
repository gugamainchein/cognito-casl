import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router";

import { AccessHeader } from "../components/AccessHeader";
import { InputComponent } from "../components/InputComponent";
// import { SendAlert } from "../components/SendAlert";

export const ForgotPass = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const forgot = async (e: any) => {
    e.preventDefault();

    try {
      await Auth.forgotPassword(username);
      localStorage.setItem("username", username);
      navigate("/change/password");
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
      </>
    );
  };

  return (
    <AccessHeader
      funcToActionForm={(e) => forgot(e)}
      headText="Recupere sua Senha"
      buttonText="Enviar Código"
      boxForm={generateFormBlock()}
    />
  );
};
