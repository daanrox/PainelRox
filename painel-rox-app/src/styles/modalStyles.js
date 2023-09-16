import { createGlobalStyle } from 'styled-components';

export const ModalStyles = createGlobalStyle`

    .modal-overlay{
        background-color: rgba(0,0,0,0.8);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .modal-content{
        background-color: var(--color-secundary);
        width: 100%;
        height: fit-content;
        max-width: 40rem;
        border-radius: 0.5rem 0.5rem 0 0;
      
    }


`
