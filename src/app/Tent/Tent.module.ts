import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {};

export default {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;

    figure {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      figcaption {
        margin-top: 20px;
        max-width: 320px;
        text-align: center;
        text-shadow: 0 2px 1px white;
        font-size: 14px;
        font-weight: 600;
      }

      img {
        width: 160px;
        display: inline-block;
      }
    }
  `,
};
