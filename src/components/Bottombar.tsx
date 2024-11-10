"use client";

import { Colors } from "@/styles/color";
import { Box } from "./Box";
import styled from "@emotion/styled";
import { Text } from "./Text";
import { usePathname, useRouter } from "next/navigation";

export default function Bottombar() {
  const path = usePathname();
  const router = useRouter();

  const BottomtabWrap = styled.div`
    width: 100%;
    position: absolute;
    bottom: 20px;
  `;

  const ButtonWrap = styled.div`
    cursor: pointer;
  `;

  return (
    <BottomtabWrap>
      <Box
        margin="20px"
        padding="22px 40px"
        backgroundColor={Colors.primary_color}
        borderColor={Colors.dark_grey_color}
        borderRadius="20px"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <ButtonWrap onClick={() => router.push("/")}>
          <Text
            size="16px"
            weight="400"
            color={
              path.split("/")[1] === ""
                ? Colors.contrast_color
                : Colors.light_grey_color
            }
          >
            Trending
          </Text>
        </ButtonWrap>
        <ButtonWrap onClick={() => router.push("/diary")}>
          <Text
            size="16px"
            weight="400"
            color={
              path.split("/")[1] === "diary"
                ? Colors.contrast_color
                : Colors.light_grey_color
            }
          >
            Diary
          </Text>
        </ButtonWrap>
        <ButtonWrap onClick={() => router.push("/setting")}>
          <Text
            size="16px"
            weight="400"
            color={
              path.split("/")[1] === "setting"
                ? Colors.contrast_color
                : Colors.light_grey_color
            }
          >
            Setting
          </Text>
        </ButtonWrap>
      </Box>
    </BottomtabWrap>
  );
}
