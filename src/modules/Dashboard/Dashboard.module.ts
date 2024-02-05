import { Link } from "react-router-dom";
import styled from "styled-components";
import APP from "@/constants/APP";

export const styles = {};

export default {
  HeroLeft: styled.div`
    /* width: 50%; */
    h1 {
      font-size: 18px;
      font-weight: 600;
    }
    h2 {
      color: ${APP.color.brand_tint};
      margin-top: -2px;
      margin-bottom: 20px;
      padding-left: 5px;
      font-size: 14px;
      font-weight: 400;
    }

    a {
      background-color: white;
      color: ${APP.color.brand};
      border: 2px solid ${APP.color.brand};
      border-radius: 20px;
      outline: 2px solid white;
      padding: 5px 18px 7px;
      font-size: 12px;
      font-weight: 600;

      &:hover {
        background-color: ${APP.color.brand};
        color: white;
      }
    }
  `,

  HeroRight: styled.div`
    /* position: relative; */
  `,
};
