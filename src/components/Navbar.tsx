"use client";

import Image from "next/image";
import { Box } from "./Box";
import Logo from "@/../public/logo.svg";
import { Colors } from "@/styles/color";
import { Button } from "./Button";
import { Text } from "./Text";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

export default function Navbar() {
  const router = useRouter();

  const LogoWrap = styled.div`
    cursor: pointer;
  `;
  return (
    <Box
      margin="20px"
      padding="20px"
      backgroundColor={Colors.primary_color}
      borderColor={Colors.dark_grey_color}
      borderRadius="20px"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoWrap onClick={() => router.push("/")}>
        <Image src={Logo} alt="✨ Journal Logo" />
      </LogoWrap>
      <Button
        padding="8px 12px"
        onClick={() => {
          console.log("login");
        }}
      >
        <Text size="16px" weight="500">
          🚪
        </Text>
      </Button>
    </Box>
  );
}
