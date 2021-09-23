import styled from "styled-components";

const Container = styled.div`

h2, span {
    padding: 0 12%;
}

h2 {
    color: var(--defaultblue);
}

span {
    color: var(--defaultgray);
}

@media screen and (max-width: 700px){
    display: none;
}

`

export default Container;