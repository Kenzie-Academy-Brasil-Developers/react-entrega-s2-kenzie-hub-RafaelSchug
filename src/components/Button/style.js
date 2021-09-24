import styled from "styled-components";


const Container = styled.button`

min-width: 200px;
height: 40px;
background: var(--defaultblue);
color: white;

:hover {
    background: var(--defaulthoverblue);
}

:active {
    background: var(--defaultactiveblue);
}


`

export default Container;