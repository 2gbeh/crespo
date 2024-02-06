import styled from "styled-components";

export default styled.main<{
  $color?: string;
  $centered?: boolean;
  $offwhite?: boolean;
}>`
  background-color: ${(props) =>
    props.$offwhite ? "#faf9f6" : props.$color || "#fff"};
  margin-bottom: 60px;
  padding-top: 60px;
  width: 100%;
  height: 100vh;

  /* CENTERED */
  ${(props) =>
    props.$centered && {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
`;
