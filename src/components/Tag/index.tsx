import { Container } from './styles';

export function Tag({ title, ...rest }: {title: string, [x:string]: any}) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
}