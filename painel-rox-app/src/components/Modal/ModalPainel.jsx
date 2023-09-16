
import { useContext } from 'react'
import { PainelContext } from '../../providers/PainelContext'
import { ModalStyled } from './style'
import { AiOutlineClose }  from "react-icons/ai";



export const ModalPainel = () =>{

    const {modalIsOpen, setModalIsOpen, modalAlert} = useContext(PainelContext)
   
     

    return(
    <>
    <ModalStyled>
        <div className='modalHeader'>
            <AiOutlineClose className='buttonCloseModal' onClick={()=>{ setModalIsOpen(false)}}/>
        </div>

    <h1>{modalAlert}</h1>
    

    </ModalStyled>
    </>

    )
}