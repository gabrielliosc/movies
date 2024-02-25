import { ReactNode } from 'react';
import  { Container } from './styles.js';

export function Section({ title, children }: {title: string, children: ReactNode}) {
    return (
        <Container>
            <h2>{title}</h2>
            
            {children}
        </Container>
    )
}