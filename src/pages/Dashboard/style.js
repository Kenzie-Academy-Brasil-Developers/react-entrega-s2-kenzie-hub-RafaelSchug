import styled from "styled-components";


export const Container = styled.div`


`

export const BasicInfoCard = styled.div`

    

`

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid blue;

    .tech_wrapper {
        padding: 10px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
       

    }
    
`

export const TechCard = styled.div`

    border: 1px solid gray;
    width: 100%;
    text-align: center;
    flex-grow: 0;
    flex-basis: calc(50% - 5px);
    
    > :nth-child(n) {
        margin: 5px 0;
    }

`

export const CardButton = styled.button`

    width: 200px;
    height: 30px;
    border:1px solid red;

    :active {
        background: gray;
    }

`