import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {
  icon: {
    size: "1.2em",
    color: "#333",
  },
};

export default {
  Container: styled.footer`
    background-color: white;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    border-top: 1px solid #eee;
    position: fixed;
    bottom: 0;
    z-index: 7;

    figure {
      /* border: 1px solid #eee; */
      padding: 10px 0;
      width: 100%;
      flex-grow: 1;
      flex-shrink: 1;

      a {
        display: flex;
        align-items: center;
        flex-direction: column;

        figcaption {
          color: #888;
          font-size: 12px;
          display: inline-block;
        }

        &.active {
          * {
            color: ${COLOR.brand};
          }
        }
      }
    }
  `,
};
