import React from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  function handleButtonClick() {
    // event bubbling 멈추기
    e.stopPropagation();
    console.log("버튼 클릭 됨.");
  }

  function handdleBoxClick() {
    console.log("박스 클릭 됨.");
  }

  return (
    <ChakraProvider>
      <Box onClick={handdleBoxClick} w={"100px"} h={"100px"} bgColor={"orange"}>
        <Button onClick={handleButtonClick}>클릭</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
