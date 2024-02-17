import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {
  icon: {
    color: COLOR.accent,
    size: "1.5em",
  },
};

export default {
  Hero: styled.section`
    background-color: ${COLOR.brand};
    color: #fff;
    padding: 30px;
    padding-bottom: 15px;

    h1 {
      margin: 25px 0 12px;
      font-size: 18px;
      font-weight: 600;
      line-height: 0;
    }

    small {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        color: ${COLOR.brand_tint} !important;
        color: #888;
        font-size: 14px;
      }
    }
  `,
  Divide: styled.div`
    border-top: 1px solid #ddd;
    margin: 5px 20px;
  `,
  Menu: styled.section`
    a {
      color: #333;
      padding: 12px 30px;
      padding-left: 30px;
      text-decoration: none;
      font-size: 15px;
      display: block;

      &:hover,
      &.active {
        background-color: ${COLOR.brand_tint};
        color: ${COLOR.brand};
      }
      &.active {
        font-weight: 600;
      }

      i,
      em {
        color: white;
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      i {
        background-color: ${COLOR.danger_bg};
        color: ${COLOR.danger_fg};
        border-radius: 100%;
        width: 20px;
        height: 20px;
      }
      em {
        background-color: ${COLOR.success_bg};
        color: ${COLOR.success_fg};
        border-radius: 3px;
        padding: 3px 8px;
      }
    }
  `,
  Footer: styled.div`
    /* background: red; */
    margin: 30px 30px 0;
    font-size: 15px;
    font-weight: 600;

    button {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    small {
      color: ${COLOR.brand};
      font-size: 14px;
    }
  `,
};
