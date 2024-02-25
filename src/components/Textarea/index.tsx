import { Container } from './styles';

export function Textarea({ value, ...rest}: { value?: string, [x:string]: any}) {
    return (
        <Container {...rest}>
            {value}
        </Container>
    )
}