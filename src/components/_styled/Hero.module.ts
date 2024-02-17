import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {};

export default styled.section<{
  $color?: string;
  $gap?: number;
  $centered?: boolean;
}>`
  background-color: ${(props) => props.$color || COLOR.brand};
  color: white;
  border-radius: 18px;
  margin: 20px 18px 10px;
  padding: 30px;

  /* CENTERED OR SPACE-BETWEEN */
  ${(props) =>
    props.$centered
      ? {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }
      : {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          gap: props.$gap ? props.$gap + "px" : "30px",
        }}
`;
