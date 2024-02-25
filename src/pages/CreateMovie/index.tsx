import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
// import { NoteItem } from "../../components/NoteItem";
// import { Textarea } from "../../components/Textarea";
// import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Form, Container } from "./styles";

import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { Return } from "../../components/Return";

export function CreateMovie() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Return to="/" />
                        <h1>Novo Filme</h1>
                    </header>
                    <div className="first-line">
                        <Input placeholder="Título" />
                        <Input placeholder="Sua Nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <Section title="Marcadores">
                        <div className="tags">
                            <MovieItem value="Drama" />
                            <MovieItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>

                    <Section title="">
                        <div className="options">
                            <Button title="Excluir filme" primary={false} />

                            <Button title="Salvar" />
                        </div>
                        
                    </Section>
                    
                </Form>
            </main>
        </Container>
    )
}