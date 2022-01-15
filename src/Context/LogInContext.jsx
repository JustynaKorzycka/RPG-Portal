import { createContext, useState } from 'react'

export const LogInContext = createContext();

export const LogInProvider = (props) => {
  const [loginUser, setLogInUser] = useState();

  return (
    <LogInContext.Provider value={[loginUser, setLogInUser]}>
      { props.children }
    </LogInContext.Provider>
  )
}
