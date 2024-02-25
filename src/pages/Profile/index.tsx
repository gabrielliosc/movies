import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Return } from "../../components/Return";

export function Profile() {
    return (
        <Container>
            <header>
                <Return to="/" />
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/gabrielliosc.png" alt="Foto do usuário" />

                    <label htmlFor="Avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" Icon={FiUser}/>
                <Input placeholder="E-mail" type="text" Icon={FiMail}/>
                <Input placeholder="Senha atual" type="password" Icon={FiLock}/>
                <Input placeholder="Nova atual" type="password" Icon={FiLock}/>
                <Button title="Salvar" />
            </Form>

            
        </Container>
    )
}