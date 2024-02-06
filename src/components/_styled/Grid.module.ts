import styled from "styled-components";

const getColumns = (cols = 3) => {
  let auto = "";
  [...Array(cols)].map(() => (auto += "auto "));
  return auto;
};

const getGap = (gap = 10) => (typeof gap === "number" ? gap + "px" : gap);

export const Item = styled.div<{
  $alt?: boolean;
}>`
  background-color: ${(props) => (props.$alt ? "dodgerblue" : "tomato")};
  color: white;
  margin: 5px;
  width: 32px;
  height: ${(props) => (props.$alt ? "64px" : "32px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<{
  $cols?: number;
  $gap?: number;
}>`
  display: grid;
  grid-template-columns: ${(props) => getColumns(props.$cols)};
  gap: ${(props) => getGap(props.$gap)};
`;

export const Centered = styled(Container)`
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Start = styled(Container)`
  align-content: start;
`;

export const Center = styled(Container)`
  align-content: center;
`;

export const End = styled(Container)`
  align-content: end;
`;

export const Between = styled(Container)`
  align-content: space-between;
`;

export const CenterStart = styled(Container)`
  align-content: center;
  justify-content: start;
`;

export const CenterCenter = styled(Container)`
  align-content: center;
  justify-content: center;
`;

export const CenterEnd = styled(Container)`
  align-content: center;
  justify-content: end;
`;

export const CenterBetween = styled(Container)`
  align-content: center;
  justify-content: space-between;
`;

export const CenterEvenly = styled(Container)`
  align-content: center;
  justify-content: space-evenly;
  /* justify-content: space-around; */
`;

export const CenterAround = styled(Container)`
  align-content: center;
  justify-content: space-around;
`;
