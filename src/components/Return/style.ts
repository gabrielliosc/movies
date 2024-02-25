import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled(Link)`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.TURQUOISE};
`