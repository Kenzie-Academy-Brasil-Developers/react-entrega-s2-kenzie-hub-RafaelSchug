import styled from 'styled-components';

const Container = styled.div`

display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
min-height: calc(100vh - 60px);
height: 100%;
max-width: 1000px;
margin: 0 auto;
overflow-x: hidden;
padding: 0 20px;

> div {
    flex: 1;
    min-width: 300px;
    padding: 20px 0;
}

> div > img {
    width: 100%
}

`

export default Container;