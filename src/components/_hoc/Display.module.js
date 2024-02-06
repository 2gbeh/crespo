import styled from "styled-components";

{/* 
<Display></Display> __

<Display $show></Display> [x]

<Display $hide></Display> [ ]
*/}

export default styled.div`
  display: ${(props) =>
    props.$show ? "block" : props.$hide ? "block" : "none"};
  visibility: ${(props) =>
    props.$show ? "visible" : props.$hide ? "hidden" : "visible"};
`;

