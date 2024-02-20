import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {};

export default {
  Input: styled.input`
    background-color: #fff !important;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 0px 0 5px;
    width: 100%;
    display: block;
    &:focus {
      border-color: ${COLOR.brand};
    }
  `,
  Wrapper: styled.div`
    position: relative;

    i {
      position: absolute;
      top: 5px;
      right: 1px;
      color: #999;
    }
  `,
};
