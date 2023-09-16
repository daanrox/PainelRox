import { styled } from "styled-components";

export const StyleHeader = styled.header`
    height: 8.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid rgba(255,255,255,0.2);
`

export const StyleHeaderContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        max-width: 20rem;
        width: 50%;
    }
`