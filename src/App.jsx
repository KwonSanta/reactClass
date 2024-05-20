import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}>Gray</Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Dolorum.</Button>
        <Button colorScheme={"yellow"}>Dolores.</Button>
        <Button colorScheme={"green"}>Consectetur.</Button>
        <Button colorScheme={"teal"}>Repudiandae.</Button>
        <Button colorScheme={"blue"}>Voluptate!</Button>
        <Button colorScheme={"cyan"}>Eligendi.</Button>
        <Button colorScheme={"purple"}>Praesentium?</Button>
        <Button colorScheme={"pink"}>Recusandae?</Button>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          Lorem.
        </Button>
        <hr />
        <Button colorScheme={"blue"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          Consectetur.
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          Rerum!
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Quis.
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
