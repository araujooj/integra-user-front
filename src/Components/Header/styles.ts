import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  background: #f5f5f5;
  header {
    margin: 0 auto;
    display: flex;
    padding: 0 60px;
    align-items: center;
    justify-content: space-between;

    img {
      width: 250px;
      height: 150px;
    }

    nav {
      flex-direction: row;

      margin-right: 10%;

      button {
        width: 150px;
      }

      a {
        @media (max-width: 700px) {
          color: #f5f5f5;
        }
        color: #333;

        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          color: ${shade(0.2, "#FF4D29")};
        }

        svg {
          margin-top: 1px;
          margin-right: 7px;
        }
      }
    }
  }
`;
