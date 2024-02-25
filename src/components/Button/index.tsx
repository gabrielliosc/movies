import { Fragment } from "react";
import { Container } from "./styles";

export function Button({ title, loading = false, primary=true, ...rest }: {title: string, loading?: boolean, primary?: boolean,[x:string]: any}) {

    return(
        <Fragment>
            <Container type="button" disabled={loading} className={primary? "primary": "secondary"} { ...rest }>
                {loading? 'Carregando...' : title }
            </Container>
        </Fragment>
    )
}