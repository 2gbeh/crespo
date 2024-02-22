import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {};

export default {
  Wrapper: styled.div`    
    position: relative;

    input {
      background-color: #fafafa !important;
      outline: none;
      border: none;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 10px 40px;
      font-size: 14px;
      width: 100%;
      display: block;
      &:focus {
        background-color: #fff !important;
      }
    }

    sup,
    sub {
      color: #999;
      font-size: 18px;
      vertical-align: middle;
      position: absolute;
      top: 12px;
    }
    sup {
      left: 12px;
    }
    sub {
      right: 12px;
    }
  `,
};
