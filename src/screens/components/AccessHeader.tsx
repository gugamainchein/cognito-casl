import { Flex, Heading, Stack, Box, Avatar, Button } from "@chakra-ui/react";

type AppProps = {
  headText: string;
  buttonText: string;
  boxForm: any;
  funcToActionForm?: (e: any) => void;
};

export const AccessHeader = (props: AppProps) => {
  const { headText, boxForm, buttonText, funcToActionForm } = props;

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">{headText}</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={funcToActionForm}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              {boxForm}
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                {buttonText}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
