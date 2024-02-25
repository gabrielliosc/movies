import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TURQUOISE_100};

    border: none;
    border-radius: 22px;

    padding: 22px;
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;

    > h2 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
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
export const Description = styled.div`
    width: 100%;
    height: 60px;
    overflow-y: hidden;
    color: ${({ theme }) => theme.COLORS.GRAY};
    text-align: left;
`