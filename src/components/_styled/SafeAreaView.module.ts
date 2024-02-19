import styled from "styled-components";

export default styled.main<{
  $color?: string;
  $padding?: number;
  $centered?: boolean;
  $offwhite?: boolean;
}>`
  background-color: ${(props) =>
    props.$offwhite ? "#fafafa" : props.$color || "#fff"};
  margin-bottom: 140px;
  padding-top: 60px;
  width: 100%;
  height: 100vh;

  /* PADDING */
  ${(props) =>
    props.$padding && {
      paddingLeft: props.$padding + 'px',
      paddingRight: props.$padding + 'px',
    }}

  /* CENTERED */
  ${(props) =>
    props.$centered && {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
`;
