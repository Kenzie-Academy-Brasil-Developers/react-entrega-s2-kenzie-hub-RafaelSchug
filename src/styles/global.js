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
        --defaultblue: #2975ff;
        --defaulthoverblue: #1860e2;
        --defaultactiveblue: #1254cc;
        --defaultgray: #6f6f6f;
        --defaultdarkergray : #545454;
        --defaultborder: 1px solid #eaeaea;
        --defaultboxshadow: 0 0 8px 0px #dbdbdb;
        --defaultred:#fd4b4b;
        --defaulthoverred: #db2323;
        --defaultactivered: #cd0b0b;
        --defaultredtext: #ff2f2f;
        --defaultorangetext: #f5621f;
    }

    body {
        background: #f0f2f5;
        min-width: 320px;
    }

    button {
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
    }

`