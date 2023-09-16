import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;

    }

    body{
        background-color: var(--color-secundary);
        color: white;
        font-family: var(--font-primary);
    }

    :root{
       --color-primary: #d53dff;
        --color-primary-focus: #d51dff;
        --color-primary-negative: #59323F;
        --color-secundary: #040405;
        
        --grey000: #F8F9FA;
        --grey100: #868E96;
        --grey200: #343B41;
        --grey300: #212529;
        --grey400: #121214;
        
        --color-sucess: #3FE864;
        --color-error: #E83F5B;
        
        --font-primary: 'Inter', sans-serif;
        
        
        font-size: 62.5%;
    }
`