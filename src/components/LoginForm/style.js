import styled from 'styled-components'

const Container = styled.div`


@keyframes login_form_anim {
    from {
        opacity: 0;
        transform: translateX(100px)
    }
}

animation: login_form_anim .5s 1 ease-in-out;

form {
    border: var(--defaultborder);
    box-shadow: var(--defaultboxshadow);
    background: white;
    max-width: 330px;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 20px;
    padding: 20px;

    h2 {
        color: #808080;
        text-transform: uppercase;
        font-size: 19px;
    }

    > div {
        display: flex;
        flex-direction: column;
    }

    > div > span {
        color: var(--defaultredtext);
        font-size: 14px;
        padding: 4px 0;
    }


    input {
        min-width: 250px;
        border: var(--defaultborder);
        height: 40px;
        padding: 0 5px;
        font-weight: 500;
        color: var(--defaultdarkergray);
        font-size: 15px;
    }
}

`

export default Container