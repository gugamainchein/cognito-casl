import { createStandaloneToast } from "@chakra-ui/toast";
const { ToastContainer, toast } = createStandaloneToast();

type AppProps = {
  title: string;
  status: "info" | "warning" | "success" | "error" | "loading";
  description?: string;
};

export const SendAlert = (props: AppProps) => {
  const { title, status, description } = props;

  toast({
    position: "top-right",
    title,
    status,
    description,
    duration: 5000,
    isClosable: true,
  });

  return <ToastContainer />;
};
