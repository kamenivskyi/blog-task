import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1600px;
  margin: 0 auto;
`

export const InputStyled = styled.input`
  padding: 10px 20px;
  font-size: 17px;
  border-radius: 3px;
  margin-right: 20px;
  border: 1px solid #ccc;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 20px 0;
  }
`

export const Button = styled.button`
  font-size: 16px;
  display: block;
  padding: 10px 20px;
  color: white;
  background-color: #6293ea;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #3d7bea;
    box-shadow: 0px 0px 4px #ccc;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`
