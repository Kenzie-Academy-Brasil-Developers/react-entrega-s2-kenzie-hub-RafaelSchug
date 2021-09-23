import Container from './style'
import KenzieHubIllustration from '../KenzieHubIllustration';


export const Main = ({children}) => {
    return (
        <Container>
            <KenzieHubIllustration />
            {children}
        </Container>
    )
}

