import { styled } from "styled-components";

export const StyledHome = styled.div`
    height: 70vh;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    .homeAvatar {
        width: 80%;
        max-width: 70rem;
    }

    .homeInfo {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        h1 {
            font-size: 3.5rem;
        }

        p {
            font-size: 2rem;
            max-width: 50rem;
        }

        .lineBreaker {
            color: var(--color-primary);
            font-size: 5rem;
            font-weight: bold;
        }

        .writeAnimation {
            position: relative;
            overflow: hidden;

            &:after {
                content: "|";
                display: inline-block;
                animation: blink 0.7s infinite;
                color: var(--color-primary);
                vertical-align: middle;
            }
        }
    }

    @keyframes blink {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
`;
