import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function MovieItem({ isNew, value, onClick, ...rest }:{isNew?: boolean, value?: string, onClick?: React.MouseEventHandler, [x:string]: any}) {
    return (
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />

            <button type='button' onClick={onClick} className={isNew ? "button-add" : "button-delete"} >
                { isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}