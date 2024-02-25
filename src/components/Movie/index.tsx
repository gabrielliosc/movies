import { Container, EmptyStar, Star, Stars, Description } from './styles';
import { Tag } from '../Tag';

export function Movie({ data, ...rest}: {data: any, [x:string]: any}) {
    const stars = [
        data.stars >= 1? <Star/>: <EmptyStar />,
        data.stars >= 2? <Star/>: <EmptyStar />,
        data.stars >= 3? <Star/>: <EmptyStar />,
        data.stars >= 4? <Star/>: <EmptyStar />,
        data.stars == 5? <Star/>: <EmptyStar />]
        
    return(
        <Container {...rest} to="/movie-preview/1">
                
            <h2>{data.title}</h2>
            <Stars>{stars[0]}{stars[1]}{stars[2]}{stars[3]}{stars[4]}</Stars>        
            <Description>
                {data.description}
            </Description>
            

            {
            data.tags &&
            <footer>
                {
                    data.tags.map((tag: { id: any; name: any; }) => <Tag key={tag.id} title={tag.name} />)
                }
            </footer>
            }
        </Container>
    )
}