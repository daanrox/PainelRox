import { createContext, useContext, useState } from "react"


export const PainelContext = createContext({});

export const PainelProvider = ({children}) =>{

const [isSession, setIsSession ] = useState(true)

    return <PainelContext.Provider
        value={{isSession, setIsSession}}
      >
        {children}
      </PainelContext.Provider>
}