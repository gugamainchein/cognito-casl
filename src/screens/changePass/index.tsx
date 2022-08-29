import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { AccessHeader } from "../components/AccessHeader";
import { InputComponent } from "../components/InputComponent";
// import { SendAlert } from "../components/SendAlert";

export const ChangePass = () => {
  const username = localStorage.getItem("username") || "";
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const forgot = async (e: any) => {
    e.preventDefault();

    try {
      if (password === confirmPassword) {
        await Auth.forgotPasswordSubmit(username, code, confirmPassword);
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const generateFormBlock = () => {
    return (
      <>
        <InputComponent
          inputType={"text"}
          inputPlaceholder="Código encaminhado"
          getInputValue={(e) => setCode(e.target.value)}
        />

        <InputComponent
          inputType={"password"}
          inputPlaceholder="Insira sua nova senha"
          getInputValue={(e) => setPassword(e.target.value)}
        />

        <InputComponent
          inputType={"password"}
          inputPlaceholder="Confirme sua nova senha"
          getInputValue={(e) => setConfirmPassword(e.target.value)}
        />
      </>
    );
  };

  useEffect(() => {
    if (!username) {
      navigate("/recovery/password");
    }
  });

  return (
    <AccessHeader
      funcToActionForm={(e) => forgot(e)}
      headText="Altere sua Senha"
      buttonText="Trocar Senha"
      boxForm={generateFormBlock()}
    />
  );
};
