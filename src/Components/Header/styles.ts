import styled from "styled-components";

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
      margin-right: 10%;
      a {
        @media (max-width: 700px) {
          color: #f5f5f5;
        }
        color: #333;

        font-size: 16px;
        transition: opacity 0.2s;

        svg {
          margin-top: 1px;
          margin-right: 7px;
        }

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
