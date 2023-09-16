import { styled } from "styled-components";

export const DashboardStyle = styled.div`
    width: 80%;
    height: 15rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: auto;

    .infoContainer{
        width: 30rem;
        margin: 3rem 0;
        height: 15rem;
        min-width: 2.5rem;
        border: 0.1rem solid var(--color-primary);
        border-radius: 0.5rem;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 3rem;
        padding-left: 3rem;
    
        .infoIcon{
            font-size: 4rem;
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: left;
            gap: 1rem;
            justify-content: center;
        }

        div>h3{
            font-size: 2rem;
        }

        div>p{
            font-size: 1.3rem;
        }
    }


`