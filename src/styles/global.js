import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Open Sans", sans-serif;
    }

    :root {
        --white: #f5f5f5;
        --gradientblue: linear-gradient(0, #1f33ad, #4b53ed);
        --defaultblue: #2975ff;
        --defaultgray: #6f6f6f;
    }

    body {
        background: #f0f2f5;
    }

    button {
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
    }

`