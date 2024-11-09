"use client";

import React from "react";
import styled from "@emotion/styled";

interface BoxProps {
  width: number;
  height: number;
  margin: number;
  padding: number;
  backgroundColor: string;
  borderColor: string;
  borderRadius: number;
  children: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  width,
  height,
  margin,
  padding,
  backgroundColor,
  borderColor,
  borderRadius,
  children,
}) => {
  const StyledBox = styled.div`
    width: ${width}px;
    height: ${height}px;
    margin: ${margin}px;
    padding: ${padding}px;
    background-color: ${backgroundColor};
    border: 1px solid ${borderColor};
    border-radius: ${borderRadius}px;
  `;

  return <StyledBox>{children}</StyledBox>;
};
