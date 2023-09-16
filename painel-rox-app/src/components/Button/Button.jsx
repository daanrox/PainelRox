import { StyledButton } from "./style"

export const Button = ({text, onClick}) =>{

    return(
        <>
        <StyledButton onClick={onClick}>{text}</StyledButton>
        </>
    )
}