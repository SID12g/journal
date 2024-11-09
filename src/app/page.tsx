"use client";

import { Box } from "@/components/Box";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <Box
      width={"100px"}
      height={"100px"}
      margin={"1px"}
      padding={"0px"}
      backgroundColor="#fff"
      borderColor="#000"
      borderRadius={"10px"}
    >
      abc
      <Button onClick={() => console.log(1)}>로그인</Button>
    </Box>
  );
}
