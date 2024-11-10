"use client";

import { Box } from "./Box";
import { Colors } from "@/styles/colors";
import { Button } from "./Button";
import { Text } from "./Text";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

export default function Navbar() {
  const router = useRouter();

  const NavbarWrap = styled.div`
    width: 100%;
    position: fixed;
    top: 12px;
  `;
  const LogoWrap = styled.div`
    cursor: pointer;
  `;
  return (
    <NavbarWrap>
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
          <Text size="20px" weight="400">
            ✨ Journal
          </Text>
        </LogoWrap>
        <Button
          padding="8px 12px"
          onClick={() => {
            router.push("/login");
          }}
        >
          <Text size="16px" weight="500">
            🚪
          </Text>
        </Button>
      </Box>
    </NavbarWrap>
  );
}
