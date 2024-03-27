import { Link } from "react-router-dom";
import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {};

export default {
  Container: styled.div`
    div > div {
      background-color: white;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  `,
  Link: styled(Link)`
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;

    small {
      margin-top: 5px;
      color: #555;
      font-size: 12px;
    }
  `,
};
