import styled from "styled-components";
import APP from "lib/etugbeh/constants/APP";

export default styled.section`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: ${(props) => props.$radius || "8px"};
  padding: ${(props) =>
    props.$modal ? "0px" : props.$padding ? props.$padding + "px" : "20px"};
  margin: ${(props) => (props.$modal ? "0px auto" : props.$margin || "0px")};
  width: ${(props) => (props.$modal ? "640px" : "auto")};
  min-width: ${(props) => (props.$span ? props.$span + "px" : "auto")};
  max-width: ${(props) => (props.$span ? props.$span + "px" : "auto")};

  & > h1 {
    color: ${COLOR.brand};
    margin: 0;
    padding: 0 0 20px 0;
    font-size: 14px;
  }
`;
