import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    overflow-x: hidden;
}

body {
    background-color: rgb(220, 252, 231);
    background-image: radial-gradient(at 81% 95%, rgb(165, 180, 252) 0, transparent 52%), 
    radial-gradient(at 53% 21%, rgb(162, 28, 175) 0, transparent 87%), 
    radial-gradient(at 39% 72%, rgb(52, 211, 153) 0, transparent 50%), 
    radial-gradient(at 46% 61%, rgb(253, 164, 175) 0, transparent 80%), 
    radial-gradient(at 62% 9%, rgb(94, 234, 212) 0, transparent 49%), 
    radial-gradient(at 74% 22%, rgb(17, 94, 89) 0, transparent 64%);
}
`;