import { createContext, useContext, useState } from "react"


export const PainelContext = createContext({});

export const PainelProvider = ({children}) =>{

const [isSession, setIsSession ] = useState(true)
const [modalIsOpen, setModalIsOpen] = useState(false)
const [modalAlert, setModalAlert] = useState('')


const closeModal = () =>{
  setModalIsOpen(false)
}

    return <PainelContext.Provider
        value={{isSession, setIsSession,modalIsOpen, setModalIsOpen, modalAlert, setModalAlert,closeModal }}
      >
        {children}
      </PainelContext.Provider>
}