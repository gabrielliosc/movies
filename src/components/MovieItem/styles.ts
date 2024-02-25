import styled from "styled-components";

export const Container = styled.div<{ isNew?: boolean; }>`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme}) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_200} ` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background:none;
    }

    .button-delete {
        color: ${({ theme}) => theme.COLORS.TURQUOISE};
    }

    .button-add {
        color: ${({ theme}) => theme.COLORS.TURQUOISE};
    }

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: ${({ theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme}) => theme.COLORS.GRAY_100};
        }
    }
`