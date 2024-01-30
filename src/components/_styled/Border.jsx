import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props?.$color || '#eee'};
  border-radius: 100%;
  min-width: ${(props) => (props.$size ? props.$size + "px" : "32px")};
  min-height: ${(props) => (props.$size ? props.$size + "px" : "32px")};
  max-width: ${(props) => (props.$size ? props.$size + "px" : "32px")};
  max-height: ${(props) => (props.$size ? props.$size + "px" : "32px")};
`;
