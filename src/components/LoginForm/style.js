import styled from 'styled-components'

const Container = styled.div`


form {
    border: 1px solid gray;
    max-width: 400px;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 20px;
    padding: 20px;

    > div {
        display: flex;
        flex-direction: column;
    }

    > div > span {
        color: red;
    }


    input {
        min-width: 200px;
        height: 40px;
        padding: 0 5px;
    }
}

`

export default Container