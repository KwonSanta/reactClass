import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { EmailIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <SunIcon></SunIcon>
        <MoonIcon></MoonIcon>
      </div>
      <div>
        <Button leftIcon={<EmailIcon />}>Email</Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
