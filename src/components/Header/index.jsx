import Container from './style';

export const Header = ({children}) => {
    return (
        <Container>
            <div>
                {children}
            </div>
        </Container>
    )
}