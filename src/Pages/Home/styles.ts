import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  align-items: left;
  justify-content: center;
  background: #f5f5f5 no-repeat center;
  color: #312e37;
  text-align: left;
  padding: 65px;
  margin-left: 3%;

  @media (max-width: 700px) {
    text-align: center;
    button {
      margin-left: 3%;
      width: 330px;
    }
  }

  width: 100%;
  max-width: 700px;

  h2 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 5%;
  }

  span {
    margin-bottom: 3%;
    font-size: 20px;
  }

  div {
    margin-top: 4%;
    margin-right: 10%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-size: cover;
  margin-bottom: 10%;
  img {
    margin-left: 2%;
    width: 80%;
    height: 80%;
  }
`;
