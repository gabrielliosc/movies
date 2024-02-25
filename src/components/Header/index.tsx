import { Input } from "../Input/index.tsx";
import { Container, Profile, Logout, Title } from "./styles.ts";
import { BiSearch } from "react-icons/bi";


export function Header(){
    return (
        <Container>
            
            <Title>RocketMovies</Title>

            <Input Icon={ BiSearch } placeholder="Pesquisar pelo título" />

            <Profile to="/profile">
                <div>
                    <strong>Gabrielli Oliveira</strong>
                    <Logout>sair</Logout>
                </div>

                <img src="https://github.com/gabrielliosc.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}