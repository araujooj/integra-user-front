import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  background: #ff4d29;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: #f5f5f5;
  font-weight: 600;
  transition: 0.5s;

  margin-top: 16px;

  &:hover {
    background: ${shade(0.2, "#FF4D29")};
  }
`;
