import styled from "styled-components";

const getGap = (gap = 10) => (typeof gap === "number" ? gap + "px" : gap);

const withCentered = styled.div<{
  $alt?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const withConfig = styled.div<{
  $cross?: boolean;
  $nowrap?: boolean;
  $gap?: number;
}>`
  display: flex;
  flex-direction: ${(props) => (props.$cross ? "column" : "row")};
  flex-wrap: ${(props) => (props.$nowrap ? "nowrap" : "wrap")};
  gap: ${(props) => getGap(props.$gap)};
`;

export const Item = styled(withCentered)`
  background-color: ${(props) => (props.$alt ? "dodgerblue" : "tomato")};
  color: white;
  margin: 5px;
  width: 32px;
  height: ${(props) => (props.$alt ? "64px" : "32px")};
`;

export const Centered = styled(withCentered)`
  width: 100%;
  height: 100vh;
`;

export const Start = styled(withConfig)`
  justify-content: flex-start;
`;

export const Center = styled(withConfig)`
  justify-content: center;
`;

export const End = styled(withConfig)`
  justify-content: flex-end;
`;

export const Between = styled(withConfig)`
  justify-content: space-between;
`;

export const CenterStart = styled(withConfig)`
  align-items: center;
  justify-content: flex-start;
`;

export const CenterCenter = styled(withConfig)`
  align-items: center;
  justify-content: center;
`;

export const CenterEnd = styled(withConfig)`
  align-items: center;
  justify-content: flex-end;
`;

export const CenterBetween = styled(withConfig)`
  align-items: center;
  justify-content: space-between;
`;

export const EndBetween = styled(withConfig)`
  align-items: flex-end;
  justify-content: space-between;
`;
