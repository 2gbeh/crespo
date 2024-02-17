import styled from "styled-components";
import COLOR from "@/constants/COLOR";

export const styles = {};

export default {
  Container: styled.div`
    padding: 20px 30px;
  `,

  TopSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 8px;
      font-size: 18px;
      font-weight: 600;
    }

    address {
      margin-top: 2px;
      font-style: normal;
      display: flex;
      align-items: center;
      gap: 5px;
      p {
        color: ${COLOR.my_blue};
        color: #888;
        font-size: 14px;
      }
    }

    a {
      background-color: ${COLOR.brand};
      color: white;
      border-radius: 20px;
      margin-top: 15px;
      padding: 8px 22px;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;

      &:hover {
        background-color: ${COLOR.brand_dark};
      }
    }
  `,

  BottomSection: styled.section`
    ul {
      border-top: 1px solid #eee;
      margin: 20px 0;
      padding: 20px 0 10px;
      li {
        margin-bottom: 10px;
        i {
          background-color: white;
          margin-top: 10px;
          min-width: 20px;
        }
        p {
          color: #888;
          font-size: 12px;
        }
        b {
          margin-top: -2px;
          font-size: 15px;
          font-weight: 600;
          display: block;
          a {
            color: blue;
            /* text-decoration: underline; */
          }
        }
      }
    }
  `,
};
