import styled from 'styled-components';

const Container = styled.div`

    height: 60px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    gap: 5px;
    box-shadow: 0 0 2px 0px #7a7a7a;

    .logo {
        color: #2975ff;
    }
  
    a {
        color: gray;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 1px;
        white-space: nowrap;

    }

    a + a {
        margin-left: 20px;
    }

`

export default Container;