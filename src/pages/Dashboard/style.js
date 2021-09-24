import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
    padding-bottom: 20px;

`

export const BasicInfoCard = styled.div`

    @keyframes basic_card_anim {
        from {
            opacity: 0;
            transform: translateX(-100px)
        }
    }

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    animation: basic_card_anim .5s 1 ease-in-out;



    > h1 {
        font-weight: 500;
        padding: 20px 0;
        color: #545454;

        > span {
            font-weight: bold;
        }
    }

    .info_wrapper {
        border: var(--defaultborder);
        box-shadow: var(--defaultboxshadow);
        background: white;
        padding-bottom: 10px;

        > div {
            display: flex;
            align-items: center;
            padding: 4px 10px;
        }

        > h3 {
            line-height: 40px;
            font-weight: bold;
            display: block;
            background: white;
            color: #4c4c4c;
            text-align: center;
            text-transform: uppercase;
            font-size: 14px;
        }

        p {
            padding: 5px 10px;
            font-family: "Montserrat";
            font-size: 15px;
        }

        img {
            height: 20px;
        }


    }

`

export const TechContainer = styled.div`
     @keyframes tech_cont_anim {
        from {
            opacity: 0;
            transform: translateX(100px)
        }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border: var(--defaultborder);
    box-shadow: var(--defaultboxshadow);
    background: white;
    animation: tech_cont_anim .5s 1 ease-in-out;


    > h3 {
        width: 100%;
        line-height: 40px;
        font-weight: bold;
        display: block;
        background: white;
        color: #4c4c4c;
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
    }

    .tech_wrapper {
        padding: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        

        @keyframes card_anim {
            0% {
                opacity: 0;
                transform: scale(0.5);
            }
            80% {
                transform: scale(1.2);
            }
        }

        > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            animation: card_anim .5s 1 ease-in-out;

            img {
                max-width: 200px;
                opacity: 0.1;
                filter: drop-shadow(2px 4px 6px black);
            }

            .no_data_msg {
                position: absolute;
                color: #545454;
                text-align: center;
                font-weight: bold;
                position: absolute;
                font-variant: all-small-caps;
                font-size: 17px;
            }
        }
    }

    @media screen and (max-width: 600px){
        .tech_wrapper div {
            flex: 1;
        }
    }
    
`

export const TechForm = styled.div`

    border: var(--defaultborder);
    padding: 20px;
    padding-top: 0;
    margin: 10px;

    form {
        gap: 5px;
        display: flex;

        input {
            height: 30px;
            border: var(--defaultborder);
            padding: 0 5px;
        }
    }


    h4 {
        padding: 10px 0;
        color: var(--defaultorangetext);
        font-variant: all-small-caps;
    }

    button {
        background: var(--defaultblue);
        color: white;
        font-weight: bold;
        padding: 0 10px;
        height: 30px;
    }

    button:hover {
        background: var(--defaulthoverblue);
    }

    button:active {
        background: var(--defaultactiveblue);
    }

    @media screen and (max-width: 600px){
        width: 80%;
        min-width: 250px;
        form {
            flex-direction: column;
        }
    }

`

export const TechCard = styled.div`

    border: var(--defaultborder);
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
    background: var(--defaultred);
    color: white;
    font-weight: bold;

    :hover {
        background: var(--defaulthoverred);
    }

    :active {
        background: var(--defaultactivered);
    }

`