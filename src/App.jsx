import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  Select,
} from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="tomato"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Formulário
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome" focusBorderColor="tomato" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" focusBorderColor="tomato" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date" focusBorderColor="tomato" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                {/* <Input id="natural" focusBorderColor="tomato" /> */}
                <Select placeholder="Selecionar" focusBorderColor="tomato">
                  <option value="option1" _hover={{ bg: "tomato" }}>
                    Brasileiro
                  </option>
                  <option value="option2" _hover={{ bg: "tomato" }}>
                    Estrangeiro
                  </option>
                </Select>
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input id="cel" type="number" focusBorderColor="tomato" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="tel">Telefone</FormLabel>
                <Input id="tel" type="number" focusBorderColor="tomato" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereço">Endereço</FormLabel>
                <Input id="endereço" focusBorderColor="tomato" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" focusBorderColor="tomato" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Sexo</FormLabel>
                <RadioGroup defaultValue="masculino">
                  <HStack spacing="24px">
                    <Radio value="masculino" colorScheme="orange">
                      Masculino
                    </Radio>
                    <Radio value="feminino" colorScheme="orange">
                      Feminino
                    </Radio>
                    <Radio value="outro" colorScheme="orange">
                      Outro
                    </Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>

            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="tomato"
                color="white"
                fontWeight="bold"
                fontSize="4x1"
                mt="4"
                _hover={{ bg: "red.400" }}
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
