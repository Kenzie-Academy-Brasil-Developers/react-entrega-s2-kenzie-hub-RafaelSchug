import styled from 'styled-components';

const Container = styled.div`

display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: calc(100vh - 60px);

> div {
    flex: 1;
    min-width: 300px;
}

> div > img {
    width: 100%
}

`

export default Container;