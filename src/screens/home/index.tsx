import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import { Can } from "../../guards/GuardContext";
import { fetchUsers } from "../../services";

export const Home = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function getUsers() {
      const consult = await fetchUsers();
      return setUsers(consult);
    }

    getUsers();
  }, [users]);

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
        <Box minW={{ base: "90%", md: "468px" }}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <Can I="read" a="User">
              <TableContainer>
                <Table variant="simple">
                  <TableCaption>
                    {new Date().getFullYear()} © Powered by Gustavo Mainchein
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Nome</Th>
                      <Th>E-mail</Th>
                      <Th>Grupo</Th>
                      <Th>Editar</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {users.map((result, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{result.name}</Td>
                          <Td>{result.email}</Td>
                          <Td>{result.group}</Td>
                          <Td>
                            <Button>
                              <EditIcon />
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Can>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
