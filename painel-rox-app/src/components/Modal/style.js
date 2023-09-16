import { styled } from "styled-components";

export const ModalStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20rem;
    gap: 3rem;

    .modalHeader{
        width: 100%;
        display: flex;
        height: 5rem;
        justify-content: flex-end;
        font-size: 2.5rem;
        padding: 1rem;
        color: white;
        align-self: flex-end;
        background-color: var(--color-primary);
        border-radius: 0.5rem 0.5rem 0 0;

        .buttonCloseModal{
            cursor: pointer;
            transition: transform 0.5s

        }
        .buttonCloseModal:hover{
            transform: scale(1.1);
        }
    }

    h1{
        margin: auto;
        flex-wrap: wrap;
        padding: 2rem;
        height: max-content;
    }

`