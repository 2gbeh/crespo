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
      padding: 8px 40px;
      font-size: 14px;
      width: 100%;
      display: block;
      &:focus {
        background-color: #fff !important;
      }
    }

    sup,
    sub {
      position: absolute;
      color: #999;
      font-size: 18px;
      vertical-align: middle;
    }
    sup {
      top: 10px;
      left: 12px;
    }
    sub {
      top: 10px;
      right: 12px;
    }
  `,
};
