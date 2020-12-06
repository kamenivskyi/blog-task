import styled from 'styled-components';

export const ListItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 48%; 
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const TitleStyled = styled.h4`
  text-align: center;
`;
  
  export const BodyStyled = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 16px;
  display: block;
  padding: 10px 20px;
  color: white;
  background-color: cornflowerblue;
  border: none;
`;
