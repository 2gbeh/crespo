import styled from "styled-components";

export default {
  form: styled.form`
    /* background-color: #ffc; */
    padding: 20px 30px;

    fieldset {
      section {
        margin: 10px 0;
        p {
          color: red;
          margin-top: 2px;
          padding: 0 2px;
          font-size: 12px;
        }
      }
    }

    label {
      padding: 0 2px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }

    input {
      outline: none;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 2px;
      padding: 8px 10px;
      width: 100%;
      display: block;
      &:focus {
        border-color: blue;
      }
    }

    button {
      background-color: blue;
      color: white;
      border-radius: 4px;
      padding: 10px;
      width: 100%;
      letter-spacing: 1px;
      font-size: 14px;
      &:active {
        background-color: black;
      }
      &:disabled {
        background-color: darkblue;
      }
    }

    footer {
      margin-top: 15px;
      p {
        color: blue;
        margin-top: 2px;
        padding: 0 2px;
        text-align: center;
        font-size: 12px;
      }
    }
  `,
};
