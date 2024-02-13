import styled from "styled-components";
import APP from "@/constants/APP";

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
      label {
        margin-top: 20px;
        color: #777;
        font-size: 14px;
        // border-bottom: 1px solid;
        display: inline-block;
      }
      input {
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd;
        padding: 0px 0 5px;
        width: 100%;
        display: block;
        &:focus {
          border-color: ${APP.color.brand};
        }
      }
      button {
        background: ${APP.color.brand};
        color: white;
        border-radius: 2px;
        margin-top: 20px;
        padding: 12px 10px;
        width: 100%;
        font-size: 14px;
        display: block;
        &:hover {
          background: ${APP.color.brand_dark};
        }
        &:disabled {
          background: ${APP.color.brand_shade};
        }
      }
      em {
        color: ${APP.color.my_blue};
        margin-top: 2px;
        font-size: 12px;
        font-style: normal;
      }
      i {
        position: absolute;
        top: 5px;
        right: 1px;
        color: #999;
      }
      a {
        color: ${APP.color.brand};
        margin-top: 10px;
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
        color: ${APP.color.brand};
        margin-left: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }

  `,
};
