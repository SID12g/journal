"use client";

import React from "react";
import styled from "@emotion/styled";

interface TextProps {
  size: string;
  weight: string;
  color?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size,
  weight,
  color,
  children,
}) => {
  const StyledText = styled.p`
    font-size: ${size};
    font-weight: ${weight};
    color: ${color};
    margin: 0;
  `;

  return <StyledText>{children}</StyledText>;
};
