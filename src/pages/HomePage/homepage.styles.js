import styled from "styled-components";
import { randomColor } from "../../assets/coolors.styles";

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid ${randomColor};
  border-radius: 50px;
  padding: 2rem;
  background: linear-gradient(45deg, ${randomColor}, ${randomColor});
  box-shadow: 2px 4px 6px 3px rgba(0, 0, 0, 0.2);
`;
