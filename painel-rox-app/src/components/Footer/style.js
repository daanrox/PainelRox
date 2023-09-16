import { styled } from "styled-components";

export const StyleFooter = styled.footer`
    margin-top: 15rem;
   height: 8rem;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
    position: fixed;
    bottom: 0; 
    width: 100%; 

   .footerContainer{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: right;
        align-items: center;
        height: 100%;
    }


    .footerContent{
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 2rem;
    }

    .footerContent>h1{
        font-size: 2.2rem;
    }

    .footerContent>img{
        width: 5rem;
    }

`