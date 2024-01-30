import styled from "styled-components";
import APP from "constants/APP";

export const styles = {};

export default {
  container: styled.section`
    h1 {
      font-size: 20px;
      font-weight: bold;
    }

    form label {
      margin-top: 20px;
      color: #777;
      font-size: 14px;
      // border-bottom: 1px solid;
      display: inline-block;
    }
    form input {
      outline: none;
      border-bottom: 1px solid #ddd;
      padding: 0px 0 5px;
      width: 100%;
      display: block;
      &:focus {
        border-color: ${APP.color.brand};
      }
    }
    form button {
      background: ${APP.color.brand};
      color: white;
      margin-top: 32px;
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
    form em {
      color: ${APP.color.blue};
      margin-top: 2px;
      font-size: 12px;
      font-style: normal;
    }
    form i {
      position: absolute;
      top: 5px;
      right: 1px;
      color: #999;
    }

    nav {
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      a {
        color: #777;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  `,
};
