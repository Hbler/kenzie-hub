import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --toastify-color-light: #343b41;
    --toastify-color-success: #3fe864;
    --toastify-color-error: #e83f5b;
    --toastify-text-color-light: #f8f9fa;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    transition: 0.3s;
}

body {
    color: #f8f9fa;
    background-color: #000;
}

ul,ol{
    list-style: none;
}

h1{
    font-size: 18px;
}

h2 {
    font-size: 16px;
}

h3 {
    font-size: 14px;
}

p {
    font-size: 12px;
}

button{
    border: none;
    cursor: pointer;
}

.container{
    width: 100%;
    max-width: 780px;
    min-height: 100vh;
    margin: auto;
    padding: 1.2rem;

}
`;

const breakpoints = [576, 768, 992, 1200];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
