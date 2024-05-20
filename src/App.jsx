import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure, useToast } from "@chakra-ui/react";

function App(props) {
  // 안전하게 hook 은 컴포넌트 가장 상단에 순서대로 작성 할 것!!
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  // hook : use...로 시작하는 메소드들 (ex. useState, useEffect, useToast, ...)
  // hook 사용시 if / for 내에서 사용하지 말 것 🔥🔥
  // [EX] 작성하면 안되는 예시
  if (true) {
    const [text, setText] = useState("");
  }
  const [message, setMessage] = useState("");
  return;
  <ChakraProvider>
    <div></div>;
  </ChakraProvider>;
}

export default App;
