import styled from "styled-components";
import APP from "@/constants/APP";

export const styles = {};

export default {
  Label: styled.h1`
    padding: 20px 20px 10px;
    font-weight: 600;
  `,
  List: styled.ul`
    padding: 0 20px;
    li {
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      hgroup {
        h2 {
          font-size: 14px;
          font-weight: 600;
        }
        p {
          color: #555;
          font-size: 14px;
        }
      }
      time {
        color: #999;
        text-align: right;
        font-size: 12px;
        white-space: nowrap;
      }
    }
  `,
};
