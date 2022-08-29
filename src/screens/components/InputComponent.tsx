import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Link,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useState } from "react";

type AppProps = {
  inputType: string;
  inputPlaceholder: string;
  helperTextLink?: string;
  helperText?: string;
  getInputValue?: (e: any) => void;
};

export const InputComponent = (props: AppProps) => {
  const {
    inputType,
    inputPlaceholder,
    helperText,
    helperTextLink,
    getInputValue,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  return (
    <FormControl>
      <InputGroup>
        <Input
          type={showPassword ? "text" : inputType}
          placeholder={inputPlaceholder}
          onChange={getInputValue}
        />

        {[
          "Insira sua senha",
          "Insira sua nova senha",
          "Confirme sua nova senha",
        ].includes(inputPlaceholder) ? (
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
              {showPassword ? "Esconder" : "Exibir"}
            </Button>
          </InputRightElement>
        ) : (
          ""
        )}
      </InputGroup>

      {helperText && helperTextLink ? (
        <FormHelperText textAlign="right">
          <Link onClick={() => navigate(helperTextLink)}>{helperText}</Link>
        </FormHelperText>
      ) : (
        ""
      )}
    </FormControl>
  );
};
