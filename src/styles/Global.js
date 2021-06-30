import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0; 
        padding:0;
        box-sizing:border-box;
        outline:0;
        font-family: 'Franklin Gothic Medium';
        font-size:1rem;
    }

    :root{
        --white: #ffffff;
        --yellow: #FFCB05;
        --red: red;
        --black: #1e212b; 
        --gray: ##C1C1C1;
        --grayprimary: #434142;
        --orange: orange;
        --blue: #6cc1f5a1;
    }

    body{
        background-color: var(--white);
    }



`;
