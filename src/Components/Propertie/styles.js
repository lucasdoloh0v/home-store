import styled from 'styled-components';

export const PropertieContainer = styled.div`
  display: flex;
  padding: 8px;
  gap: 8px;

  background: rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  span {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
  }

  ul {
    margin-left: 16px;
  }

  h4 {
    margin-top: 8px;
  }
`;
