import styled from "styled-components";

const Container = styled.div`

@keyframes kenziehub_anim {
    from {
        opacity: 0;
        transform: translateX(-100px)
    }
}

animation: kenziehub_anim .5s 1 ease-in-out;

h2, span {
    padding: 0 10px;
    width: 80%;
    margin: 0 auto;
    display: block;
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