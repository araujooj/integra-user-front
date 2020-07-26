import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 80vh;
  display: flex;
  padding: 25px;
`;

export const Content = styled(Link)`
  flex: 1;
  justify-content: space-around;
  margin-bottom: 8%;
  margin-right: 2%;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #333;

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  h2 {
    font-weight: 500;
  }
`;
