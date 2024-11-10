"use client";

import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Colors } from "@/styles/colors";
import styled from "@emotion/styled";

export default function Setting() {
  const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
  `;

  const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ButtonWrap = styled.div`
    display: flex;
    margin-top: 20px;
  `;
  return (
    <>
      <ProfileWrap>
        <Box
          width="80px"
          height="80px"
          backgroundColor={Colors.contrast_color}
          borderRadius="100px"
          borderColor="none"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="26px" weight="400">
            ✨
          </Text>
        </Box>
        <Box width="12px" borderColor="none" />
        <TextWrap>
          <Text size="20px" weight="400" color={Colors.contrast_color}>
            sid12g
          </Text>
          <Box height="4px" borderColor="none" />
          <Text size="14px" weight="300" color={Colors.light_grey_color}>
            sead12g@gmail.com
          </Text>
        </TextWrap>
      </ProfileWrap>
      <ButtonWrap>
        <Button
          width="100%"
          padding="14px"
          backgroundColor={Colors.contrast_color}
          onClick={() => {}}
        >
          <Text size="14px" weight="400" color={Colors.primary_color}>
            사용자 정보
          </Text>
        </Button>
        <Box width="20px" borderColor="none" />
        <Button
          width="100%"
          padding="14px"
          backgroundColor={Colors.contrast_color}
          onClick={() => {}}
        >
          <Text size="14px" weight="400" color={Colors.primary_color}>
            좋아요 누른 글
          </Text>
        </Button>
      </ButtonWrap>
      <Box height="14px" borderColor="none" />
      <Button
        width="100%"
        padding="14px"
        backgroundColor={Colors.contrast_color}
        onClick={() => {}}
      >
        <Text size="14px" weight="400" color={Colors.primary_color}>
          ✨ Journal 정보
        </Text>
      </Button>
      <Box height="14px" borderColor="none" />
      <Button
        width="100%"
        padding="14px"
        backgroundColor={Colors.contrast_color}
        onClick={() => {}}
      >
        <Text size="14px" weight="400" color={Colors.primary_color}>
          문의하기
        </Text>
      </Button>
    </>
  );
}
