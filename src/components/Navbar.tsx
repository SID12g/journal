"use client";

import Image from "next/image";
import { Box } from "./Box";
import Logo from "@/../public/logo.svg";
import { Colors } from "@/styles/color";
import { Button } from "./Button";
import { Text } from "./Text";

export default function Navbar() {
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
      <Image src={Logo} alt="✨ Journal Logo" />
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
