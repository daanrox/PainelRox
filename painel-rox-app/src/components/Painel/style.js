import { styled } from "styled-components";

export const StylePainel = styled.div`
        width: 100%;
        padding: 1rem ;
        min-width: 280px;
        max-width: 50%;
        .painelLabel{
                font-size: 2rem;
                margin: 1rem 0
        }

        .totalPainel{
                font-size: 1.8rem;
                margin: 1.8rem 0;

        }

        .painelInput{
                height: 3rem;
                padding: 0 1rem;
                border-radius: 0.5rem;
                width: 100%;
        }

        button{
                margin-top: 1.5rem;
                width: 100%;

        }
`

export const StylePainelDescription = styled.div`
        width: 100%;
        max-width: fit-content;
        margin: auto;
        white-space: pre-wrap;
        font-size: 1.5rem;
        padding-top: 4rem;

`

export const StylePainelContainer = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        padding-top: 3rem;
        margin-bottom: 10rem;
`