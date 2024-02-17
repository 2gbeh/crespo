import { Link } from "react-router-dom";
import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {};

export default {
  Container: styled.section`
    padding: 10px 0 0;
    text-align: center;

    strong {
      text-align: center;
      background-color: #ccc;
      border-radius: 10px;
      width: 160px;
      height: 8px;
      display: inline-block;
    }

    small {
      color: #555;
      margin-top: -10px;
      font-size: 12px;
      display: inline-block;
    }
  `,
};
