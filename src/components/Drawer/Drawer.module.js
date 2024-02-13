import styled from "styled-components";
import APP from "@/constants/APP";

export const styles = {
  icon: {
    color: APP.color.accent,
    size: "1.5em",
  },
};

export default {
  Hero: styled.section`
    background-color: ${APP.color.brand};
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
        color: ${APP.color.brand_tint} !important;
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
        background-color: ${APP.color.brand_tint};
        color: ${APP.color.brand};
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
        background-color: ${APP.color.danger_bg};
        color: ${APP.color.danger_fg};
        border-radius: 100%;
        width: 20px;
        height: 20px;
      }
      em {
        background-color: ${APP.color.success_bg};
        color: ${APP.color.success_fg};
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
      color: ${APP.color.brand};
    font-size: 14px;

    }
  `,
};
