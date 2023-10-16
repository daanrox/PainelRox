import { createContext, useState } from "react"


export const UserContext = createContext({});

export const UserProvider = ({children}) =>{

const [userData, setUserData] = useState(null)
const [userName, setUserName ] = useState(``)
const [balance, setBalance] = useState(0.00)
const [spent, setSpent] = useState(0.00)

    return <UserContext.Provider
        value={{userName, setUserName, balance, setBalance, userData, setUserData, spent, setSpent}}
      >
        {children}
      </UserContext.Provider>
}