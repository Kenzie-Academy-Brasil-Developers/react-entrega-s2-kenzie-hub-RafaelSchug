import styled from 'styled-components';

const Container = styled.div`

    height: 60px;
    background:var(--gradientblue);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    gap: 5px;
  
    div {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        width: 100%;
        max-width: 1000px;
    }

    a {
        color: white;
    }

`

export default Container;