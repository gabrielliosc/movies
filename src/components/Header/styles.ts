import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: 1px solid ${({ theme })=> theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    padding: 24px 64px;
`
export const Title = styled.h1`
    color: ${({ theme })=> theme.COLORS.TURQUOISE};
    font-size: 24px;
`
export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        line-height: 24px;
        width: 200px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

`
export const Logout = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`