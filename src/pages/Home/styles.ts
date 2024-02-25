import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container= styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "header header"
    "title title"
    "content content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Content = styled.div`
    grid-area: content;
    padding: 0px 64px;
    overflow-y: auto;
`
export const Title = styled.div`
    grid-area: title;
    padding: 0px 64px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 32px;
        font-weight: 400;
    }
`
export const CreateMovie = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.TURQUOISE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 207px;
    border-radius: 8px;

    svg{
        margin-right: 8px;
    }
`