import styled from "styled-components";
import APP from "@/constants/APP";

export const styles = {};

export default {
  Container: styled.nav`
    figure {
      border: 1px solid #eee;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        /* border: 1px solid blue; */
        background-color: ${APP.color.brand_tint};
        display: flex;
        flex-direction: column;
        align-items: center;

        figcaption {
          margin-top: 5px;
          color: #555;
          font-size: 14px;
        }
      }
    }
  `,
};
