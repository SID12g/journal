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
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
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
  flexDirection,
  alignItems,
  justifyContent,
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
    display: flex;
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `;

  return <StyledBox>{children}</StyledBox>;
};
