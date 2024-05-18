// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.div`
  background-color: #383a4e;
  width: 40vw;
  height: 60vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #434451;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #ffffff;
  line-height: 0.5;

  @media screen and (max-width: 567px) {
    font-size: 20px;
  }
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #f8fafc;
`

export const InputContainer = styled.input`
  border: none;
  background-color: #edeeff;
  height: 40px;
  width: 300px;
  padding: 10px;
  font-size: 20px;
  margin-top: 30px;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 10px;
`
