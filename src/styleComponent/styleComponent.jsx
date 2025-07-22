import styled, { css } from "styled-components";
// export const Button = styled.button({
//   borderRadius: "8px",
//   border: "1px solid transparent",
//   padding: "0.6em 1.2em",
//   fontSize: "1em",
//   fontWeight: 500,
//   fontFamily: "inherit",
//   backgroundColor: "#1a1a1a",
//   cursor: "pointer",
//   transition: "border-color 0.25s",
// });

// Shared styles
const commonButtonStyles = css`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  height: auto;
  min-height: 48px;
  max-width: max-content;
  &:hover,
  &:focus {
    background-color: #646cff;
    color: #fff;
    outline: none;
  }
`;

// Styled button
export const Button = styled.button`
  ${commonButtonStyles}
`;

// Styled link
export const LinkButton = styled.a`
  ${commonButtonStyles}
`;
