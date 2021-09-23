import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const BasicInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    > h1 {
        font-weight: 500;
        padding: 20px 0;
        color: #545454;

        > span {
            font-weight: bold;
        }
    }

    .info_wrapper {
        border: 1px solid gainsboro;
        box-shadow: 0 0 6px 0px gainsboro;
        background: white;

        > h3 {
            line-height: 40px;
            font-weight: bold;
            display: block;
            background: linear-gradient(0, #e6e6e6, #f9f9f9);
            color: #4c4c4c;
            text-align: center;
            text-transform: uppercase;
            font-size: 14px;
        }

        p {
            padding: 10px;
            font-family: "Montserrat"
        }


    }

`

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid gainsboro;
    box-shadow: 0 0 6px 0px gainsboro;
    background: white;


    > h3 {
        width: 100%;
        line-height: 40px;
        font-weight: bold;
        display: block;
        background: linear-gradient(0, #e6e6e6, #f9f9f9);
        color: #4c4c4c;
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
    }

    .tech_wrapper {
        padding: 10px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
`

export const TechForm = styled.div`

    border: 1px solid #d9d9d9;
    padding: 20px;
    padding-top: 0;
    margin: 10px;

    form {
        gap: 5px;
        display: flex;

        input {
            height: 30px;
            border: 1px solid #cecece;
            padding: 0 5px;
        }
    }


    h4 {
        padding: 10px 0;
    }

    button {
        background: #4096ff;
        color: white;
        font-weight: bold;
        padding: 0 10px;
    }

`

export const TechCard = styled.div`

    border: 1px solid gainsboro;
    width: 100%;
    text-align: center;
    flex-grow: 0;
    flex-basis: calc(50% - 5px);
    
    > :nth-child(n) {
        margin: 5px;
    }

`

export const CardButton = styled.button`

    width: 200px;
    height: 30px;
    background: #fd4b4b;
    color: white;
    font-weight: bold;

    :active {
        background: gray;
    }

`