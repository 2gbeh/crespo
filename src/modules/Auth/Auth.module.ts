import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {};

export default {
  Container: styled.section`
    h1 {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    form {
      margin-top: 10px;

      em {
        color: ${COLOR.my_blue};
        margin-top: 2px;
        font-size: 12px;
        font-style: normal;
      }

      a {
        color: ${COLOR.brand};
        margin-top: 5px;
        font-size: 14px;
        display: flex;
        justify-content: end;
        &:hover {
          text-decoration: underline;
        }
      }

      article {
        font-size: 14px;
        margin: 10px 0;
        b {
          color: blue;
          font-weight: 600;
          display: inline-block;
        }
      }
    }

    nav {
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      a {
        color: ${COLOR.brand};
        margin-left: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  `,
};
