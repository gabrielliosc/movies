import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.TURQUOISE};
        border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    
    > main {
        grid-area: content;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        align-content: center;
        flex-wrap: wrap;
        gap: 24px;
        padding: 64px 0;

        > header{
            max-width: 1137px;
        }
    }
`
export const Tags = styled.ul`
    list-style: none;
    margin: 16px 0;
    a{
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`

export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    > button:first-child{
        align-self: end;
    }
    
    > h2 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;

    > h2 {
        font-size: 36px;
        font-weight: 500;
    }
`
export const EmptyStar = styled.span`
    height: 12px;
    width: 12px;
    margin: 0 3px;
    background-image: url('../src/assets/star.svg');
`
export const Star = styled.span`
    height: 12px;
    width: 12px;
    margin: 0 3px;
    background-image: url('../src/assets/star-full.svg');
`
export const Stars = styled.span`
    display: flex;
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > svg {
        color: ${({ theme }) => theme.COLORS.TURQUOISE};
    }

    img {
        border-radius: 50%;
        height: 16px;
        width: 16px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }
`