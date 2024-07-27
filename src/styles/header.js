import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  padding: 8px 0;
  font-size: 0.5rem;
  
  background-color: lightgray;
  font-weight: 700;

  @media (min-width: 768px) {
    & {
      padding: 16px;
      font-size: 1rem;
    }
  }
`;