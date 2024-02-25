import styled from "styled-components";

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
    }

    .tags {
        display: flex;
        justify-content: flex-start;
        flex: wrap;
        padding: 12px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        gap: 24px;
    }

    .options{
        display: flex;
        justify-content: space-between;
        gap: 40px;
    }

    .first-line{
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 40px;
    }
`

export const Form = styled.form`
    max-width: 1137px;
    margin: 38px auto;

    > header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 36px;

        a {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.TURQUOISE};
        }
    }
`