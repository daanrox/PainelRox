import { createContext, useState } from "react"


export const UserContext = createContext({});

export const UserProvider = ({children}) =>{

const [userName, setUserName ] = useState(`Daanrox`)

    return <UserContext.Provider
        value={{userName, setUserName}}
      >
        {children}
      </UserContext.Provider>
}