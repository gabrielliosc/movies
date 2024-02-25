import { FiArrowLeft } from "react-icons/fi"
import { Container } from "./style"

export function Return({to}:{to: string}){
    return(
        <Container to={to}>
            <FiArrowLeft />
            <span>Voltar</span>
        </Container>
    )
}