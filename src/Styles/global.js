import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

    --sucess: #3FE864;
    --negative: #E83F5B;

    --black: #000000;
    --white: #FFFFFF
}

body{
    background-color: var(--black);
    color: var(--grey-0);
}

body, input, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}

h1, h2, h3{
    font-weight: bold;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}
`;
