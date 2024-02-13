import React from "react";
import styled from "styled-components";
import APP from "@/constants/APP";

const OAuth = () => {
  return (
    <Styled.Figure>
      <figcaption>OR</figcaption>
      <div>
        <img src="/images/app-google.png" alt="Google" title="Google" />
        <img src="/images/app-facebook.png" alt="Facebook" title="Facebook" />
      </div>
    </Styled.Figure>
  );
};

export default React.memo(OAuth);

const Styled = {
  Figure: styled.figure`
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;

    figcaption {
      background-color: #fff;
      color: #555;
      padding: 0 10px;
      font-size: 14px;
      z-index: 1;
    }

    div {
      border-top: 2px solid #ddd;
      margin-top: -10px;
      padding: 30px 0;
      width: 160px;
      display: flex;
      justify-content: center;
      gap: 40px;

      img {
        width: 24px;
        display: inline-block;
      }
    }
  `,
};
