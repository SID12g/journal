"use client";

import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Colors } from "@/styles/colors";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const NotfoundWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const TextWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <NotfoundWrap>
      <TextWrap>
        <Text size="20px" weight="500">
          404
        </Text>
        <Box width="12px" borderColor="none" />
        <Text size="16px" weight="400">
          This page could not be found.
        </Text>
      </TextWrap>
      <Box height="20px" borderColor="none" />
      <Button
        padding="10px"
        backgroundColor={Colors.dark_grey_color}
        onClick={() => router.push("/")}
      >
        <Text size="14px" weight="400">
          🏠 Home
        </Text>
      </Button>
    </NotfoundWrap>
  );
}
