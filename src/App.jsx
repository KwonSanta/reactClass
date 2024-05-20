import React from "react";
import { Box, Center, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Flex justify={"space-between"}>
        <Box bgColor={"blue"}>Lorem.</Box>
        <Box bgColor={"orange"}>Animi.</Box>
        <Box bgColor={"yellow"}>Assumenda?</Box>
      </Flex>
      <hr />
      <Flex>
        <Box bgColor={"gray"}>1</Box>
        <Box bgColor={"gold"}>2</Box>
        <Spacer /> {/* 두 element 사이를 최대로 공간을 잡음 */}
        <Box bgColor={"green"}>3</Box>
      </Flex>
      <hr />
      <Center>
        <Box>lorem1</Box>
      </Center>
      <hr />
      <Center w={{ base: "100%", md: "500px" }} bgColor={"linen"}>
        <Box>contents</Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
