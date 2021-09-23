import Container from './style';

export const Header = ({children}) => {
    return (
        <Container>
            <div className='logo'>
                    <h3>Kenzie Hub</h3>
                </div>
                <nav>
                    {children}
                </nav>
        </Container>
    )
}