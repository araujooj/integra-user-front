import styled from "styled-components";
import { shade, darken, lighten } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 1200px;
  display: flex;
  margin-left: 10%;
  input {
    box-shadow: 2px 2px #3333;
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-right: 0px;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 150px;
    height: 70px;
    background: #ff4d29;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    transition: background-color 0.5s;

    &:hover {
      background: ${shade(0.2, "#FF4D29")};
    }
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  margin-right: 5%;
`;

export const CategoryBtn = styled.div`
  margin-top: 25px;
  width: 200px;
  border-radius: 15px;
  margin-left: 17px;
  margin-right: 18px;
  flex-direction: row;

  a {
    background: #fff;
    border-radius: 15px;
    box-shadow: 3px 3px #3333;
    height: 80px;
    width: 100%;
    padding: 10px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }

    div {
      margin: 16px;
      flex: 1;
      span {
        font-size: 16px;
        color: #333;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;

export const ProductList = styled.ul`
  margin-top: 45px;
  row-gap: 4%;
  column-gap: 0px;
  max-width: 1200px;
  margin-left: 12%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  @media (max-width: 945px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
  li {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    &:hover figure img {
      opacity: 0.9;
    }
    figure {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      max-height: 250px;
      padding-top: 91%;
      text-align: center;
      @media (max-width: 490px) {
        padding-top: 60%;
      }
      img,
      span {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        max-height: 100%;
        margin: auto;
        transition: opacity 150ms ease-in-out;
      }
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      + div {
        display: flex;
        flex-direction: column;
        margin-top: auto;
        > span {
          font-size: 21px;
          font-weight: bold;
          margin: 5px 0 20px;
        }
        button {
          background: #ff4d29;
          color: #fff;
          border: 0;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          transition: 180ms ease-in-out;
          &:hover {
            background: ${lighten(0.04, "#ff4d29")};
          }
          &:active {
            background: ${darken(0.04, "#ff4d29")};
          }
          > div:first-child {
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.1);
            position: absolute;
            @media (max-width: 680px) {
              position: initial;
            }
            @media (max-width: 490px) {
              position: absolute;
            }
            @media (max-width: 360px) {
              position: initial;
            }
            svg {
              margin: 0 5px;
            }
          }
          > span:nth-child(2) {
            padding: 12px;
            flex: 1;
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
