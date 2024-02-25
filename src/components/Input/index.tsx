import { IconType } from 'react-icons';
import { Container } from './styles';

export function Input({ Icon, ...rest }: {Icon?: IconType, [x:string]: any}) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </ Container>
    )
}