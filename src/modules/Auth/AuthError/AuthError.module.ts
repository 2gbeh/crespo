import styled from "styled-components";
import APP from "@/constants/APP";

export const styles = {}

export default {
  Conatiner: styled.div`
    background-color: ${APP.color.brand};
    color: white;
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    h1 {
      color: ${APP.color.brand_dark};
      font-size: 240px;
      font-weight: bold;
      letter-spacing: 1px;
      line-height: 280px;
      position: relative;

      /* text-shadow: 0 1px 2px ${APP.color.brand_shade}; */
    }

    article {
      position: absolute;
      h2 {
        margin-top: 0px;
        /* text-align: center; */
        width: 100%;
        font-weight: bold;
        font-size: 32px;
      }
      p {
        color: ${APP.color.brand_tint};
        width: 320px;
        margin-top: 10px;
        font-size: 14px;
        font-style: italic;
        line-height: 24px;
        
        b {
          display: inline-block;
        }
      }
    }
    button {
      background-color: white;
      color: ${APP.color.brand};
      border-radius: 4px;
      padding: 12px 18px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,
};
