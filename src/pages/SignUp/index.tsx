import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input placeholder="Nome" type="username" Icon={FiUser}/>

                <Input placeholder="E-mail" type="text" Icon={FiMail}/>

                <Input placeholder="Senha" type="password" Icon={FiLock}/>

                <Button title={"Cadastrar"} loading={false} />

                <Link to="/">
                    <BiArrowBack/> Voltar para o login
                </Link>
            </Form>
            
            <Background />
        </Container>
    )
}