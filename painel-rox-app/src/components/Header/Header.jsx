import { StyleHeader, StyleHeaderContainer } from "./style"
import logo from '../../assets/social-rox-logo.png'
import { Button } from "../Button/Button"
import { useContext } from "react"
import { PainelContext } from "../../providers/PainelContext"

export const Header = () =>{

    const { isSession, setIsSession } = useContext(PainelContext)


    const alterLogin = () =>{
        if(isSession){
            setIsSession(false)
        } else{
            setIsSession(true)
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