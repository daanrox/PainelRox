import { styled , css} from 'styled-components'

export const Title1 = styled.h1`
    font-size: 1.827rem;
    font-weight: 700;
`

export const Title2 = styled.h2`
    font-size: 1.624rem;
    font-weight: 600;

    ${({weight})=>
    weight &&
    css`
      font-weight: ${weight};
    `}
`

export const Title3 = styled.h3`
    font-size: 1.421rem;
    font-weight: 700;
`

export const Headline = styled.p`
    font-size: 1.218rem;
    font-weight: 400;

    ${({ color }) =>
    color &&
    css`
      color: var(--color-error);    
      font-weight: 200;
    `}
`

export const HeadlineBold = styled.p`
    font-size: 1.218rem;
    font-weight: 600;
`

export const HeadlineItalic = styled.p`
    font-size: 1.218rem;
    font-weight: 400;
    font-style: italic;
`