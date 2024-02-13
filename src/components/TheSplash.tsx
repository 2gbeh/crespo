import React from "react";
import styled from "styled-components";
import Border from "@/components/_styled/Border.module";
import TheLogo from "@/components/TheLogo";
import APP from "@/constants/APP";

const Splash = () => {
  return (
    <Styled.Conatiner>
      <Border $size={170} $color={"#873e7b"}>
        <Border $size={140} $color={"#955489"}>
          <Border $size={110} $color={"#a26998"}>
            <TheLogo to="/" />
          </Border>
        </Border>
      </Border>

      <hgroup>
        <h1>Jubilee Chapel HQ</h1>
        <p>Corel Ministry Int'l Inc.</p>
      </hgroup>
    </Styled.Conatiner>
  );
};

export default React.memo(Splash);

const Styled = {
  Conatiner: styled.div`
    background-color: ${APP.color.brand};
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    hgroup {
      margin-top: 40px;
      text-align: center;
      h1 {
        font-size: 24px;
        font-weight: bold;
      }
      p {
        color: #d7bfd3;
        text-transform: uppercase;
        font-size: 14px;
      }
    }
  `,
};

