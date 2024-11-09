"use client";

import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  width,
  height,
  margin,
  padding,
  backgroundColor,
  onClick,
  children,
}) => {
  const StyledButton = styled.button`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    background-color: ${backgroundColor};
    border: none;
    border-radius: 8px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  `;

  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>;
};
