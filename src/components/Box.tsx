"use client";

import React from "react";
import styled from "@emotion/styled";

interface BoxProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  children?: React.ReactNode;
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
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    background-color: ${backgroundColor};
    border: 1px solid ${borderColor};
    border-radius: ${borderRadius};
  `;

  return <StyledBox>{children}</StyledBox>;
};
