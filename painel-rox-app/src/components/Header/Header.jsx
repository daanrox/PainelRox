import { StyleHeader, StyleHeaderContainer } from "./style"
import logo from '../../assets/social-rox-logo.png'
import { Button } from "../Button/Button"
import { useContext } from "react"
import { PainelContext } from "../../providers/PainelContext"
import { UserContext } from "../../providers/UserContext"

export const Header = () =>{

    const {modalLoginIsOpen, setModalLoginIsOpen} = useContext(PainelContext)

    const { isSession, setIsSession } = useContext(PainelContext)
    const { setUserData } = useContext(UserContext)



    const alterLogin = () =>{
        if(isSession){
            setIsSession(false)
            localStorage.clear()
            setUserData(null)
        } else{
            setModalLoginIsOpen(true)
        }
    }
    return (
        <><StyleHeader>
            <StyleHeaderContainer>
                <img src={logo}/>
                <Button  text={isSession ? 'Logout' : 'Login'} onClick={alterLogin}/>
            </StyleHeaderContainer>
        </StyleHeader>
        </>
    )
}