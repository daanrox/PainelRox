import { useContext } from "react"
import { PainelContext } from "../../providers/PainelContext"
import { AiOutlineClose }  from "react-icons/ai";
import { Button } from "../Button/Button";
import { ModalLoginStyled } from "./style";


export const ModalLogin = () =>{

    const {modalLoginIsOpen, setModalLoginIsOpen} = useContext(PainelContext)
   
     

    return(
    <>
    <ModalLoginStyled>
        <div className='modalHeader'>
            <AiOutlineClose className='buttonCloseModal' onClick={()=>{ setModalLoginIsOpen(false)}}/>
        </div>
        <form>
            <input placeholder='Digite seu email' type="email" required />
            <input placeholder='Digite sua senha' type="password" required/>
            <Button text='Entrar'/>
        </form>

    </ModalLoginStyled>
    </>

    )
}