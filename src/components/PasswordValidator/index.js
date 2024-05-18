// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  PasswordContainer,
  MainHeading,
  Description,
  InputContainer,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const getPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <PasswordContainer>
        <MainHeading>Password Validator</MainHeading>
        <Description>Check how strong and secure is your password</Description>
        <InputContainer
          type="password"
          value={password}
          onChange={getPassword}
        />
        {password.length < 8 && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordContainer>
    </AppContainer>
  )
}

export default PasswordValidator
