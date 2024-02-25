import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: medium;

    &:disabled {
        opacity: 0.5;
    }

    &.primary{
        background-color: ${({ theme }) => theme.COLORS.TURQUOISE};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    &.secondary{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.TURQUOISE};
    }
`
