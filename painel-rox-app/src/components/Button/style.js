import { styled } from "styled-components";


export const StyledButton = styled.button`
    background-color: var(--color-primary);
    color: white;
    font-size: 1.6rem;
    padding: 1.2rem 3.8rem;
    border-radius: 0.5rem;
    

    &:hover{
        cursor: pointer;
        background-color: var(--color-primary-focus);
    }
    
`