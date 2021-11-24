import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
    }
    body{
        font-family: 'Jost', sans-serif;
     
    }
    .Toastify__toast-container--top-right{
        top:100px;
    }

`

export default GlobalStyle;