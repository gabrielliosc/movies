import { Container } from "./styles";

export function ButtonText({ title, isActive=false, ...rest }: {title: string, isActive?: boolean, [x:string]: any}){
    return (
        <Container type="button" {...rest} $isactive={isActive}>
            {title}
        </Container>
    )
} 