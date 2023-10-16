import { createContext, useContext, useState } from "react"


export const PainelContext = createContext({});

export const PainelProvider = ({children}) =>{

const [isSession, setIsSession ] = useState(false)
const [modalIsOpen, setModalIsOpen] = useState(false)
const [modalAlert, setModalAlert] = useState('')
const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)


const closeModal = () =>{
  setModalIsOpen(false)
}

    return <PainelContext.Provider
        value={{isSession, setIsSession,modalIsOpen,modalLoginIsOpen, setModalLoginIsOpen, setModalIsOpen, modalAlert, setModalAlert,closeModal }}
      >
        {children}
      </PainelContext.Provider>
}