import React from "react";

import { Text } from "./Text";
import { Colors } from "@/styles/colors";
import styled from "@emotion/styled";
import { Box } from "./Box";
import { Button } from "./Button";

export default function Alert({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const PageWrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const AlertWrap = styled.div`
    background-color: ${Colors.dark_grey_color};
    margin: 20px;
    padding: 20px;
    border-radius: 16px;
  `;
  return (
    <PageWrap>
      <AlertWrap>
        <Text size="16px" weight="500" color={Colors.contrast_color}>
          {title}
        </Text>
        <Box height="12px" borderColor="none" />
        <Text size="12px" weight="400">
          {content}
        </Text>
        <Box height="20px" borderColor="none" />
        <Box borderColor="none">
          <Button
            width="100%"
            padding="12px"
            backgroundColor={Colors.contrast_color}
            onClick={() => {}}
          >
            <Text size="12px" weight="400" color={Colors.primary_color}>
              로그인
            </Text>
          </Button>
          <Box width="20px" borderColor="none" />
          <Button
            width="100%"
            padding="12px"
            backgroundColor={Colors.warning_color}
            onClick={() => {}}
          >
            <Text size="12px" weight="500" color={Colors.contrast_color}>
              닫기
            </Text>
          </Button>
        </Box>
      </AlertWrap>
    </PageWrap>
  );
}
