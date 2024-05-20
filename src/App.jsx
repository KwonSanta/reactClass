import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid black",
          backgroundColor: "tomato",
        }}
      >
        Lorem ipsum dolor.
      </div>
      <Box p={"10px"} m={"20px"} border={"1px solid black"} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"orange.50"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.400"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.500"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.600"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.700"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.800"}>Lorem ipsum dolor.</Box>
      <hr />
      {/* padding */}
      <Box m={"10px"} bgColor={"yellow"}>
        Lorem ipsum dolor.
      </Box>
      <Box mt={"10px"} bgColor={"yellow"}>
        Adipisci, explicabo ratione?
      </Box>
      <Box mb={"10px"} bgColor={"yellow"}>
        Esse, maxime, voluptates.
      </Box>
      <Box ml={"10px"} bgColor={"yellow"}>
        A, aspernatur odit?
      </Box>
      <Box mr={"10px"} bgColor={"yellow"}>
        Fugiat, nesciunt quibusdam!
      </Box>
      <Box mx={"10px"} bgColor={"yellow"}>
        Earum, molestias, voluptatum?
      </Box>
      <Box my={"10px"} bgColor={"yellow"}>
        Libero, quaerat tenetur?
      </Box>
      <hr />
      <Box bgColor={"teal"} p={"10px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"teal"} pt={"10px"}>
        Minima, nulla, officia!
      </Box>
      <Box bgColor={"teal"} pb={"10px"}>
        Architecto, laboriosam, magnam?
      </Box>
      <Box bgColor={"teal"} pl={"10px"}>
        Accusamus, earum id.
      </Box>
      <Box bgColor={"teal"} pr={"10px"}>
        Ea, itaque maxime!
      </Box>
      <Box bgColor={"teal"} px={"10px"}>
        Eos illo, quis.
      </Box>
      <Box bgColor={"teal"} py={"10px"}>
        Architecto, eligendi quo.
      </Box>
      <hr />
      <Box w={"500px"}>Lorem ipsum dolor.</Box>
      <Box h={"500px"}>At, distinctio quos!</Box>
    </ChakraProvider>
  );
}

export default App;
