import styled from "styled-components";
import APP from "@/constants/APP";

export const styles = {
  icon: {
    color: APP.color.accent,
    size: "1.5em",
  },
};

export default {
  Container: styled.header`
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    /* border-bottom: 1px solid #eee; */
    padding: 0 18px;
    min-height: 55px;
    max-height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 7;
  `,
  ContentLeft: styled.div`
    figure {
      figcaption {
        margin-top: -5px;
        display: inline-block;

        small {
          color: #888;
          font-size: 12px;
        }
        b {
          margin-top: -5px;
          display: block;
        }
      }
    }
  `,
  ContentRight: styled.button`
    position: relative;
    margin-top: 8px;
  `,
};
