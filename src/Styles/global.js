import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--color-background);
  }

  .container {
    padding: 0 80px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    .container {
      padding: 0 16px;
    }
  }

  ul {
    list-style: none;
  }

  :root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;

    --color-gray-100: #333333;
    --color-gray-50: #828282;
    --color-gray-20: #E0E0E0;
    --color-gray-0: #F5F5F5;
    --color-background: white;

    --font-size-26: 1.625rem;
    --font-size-22: 1.375rem;
    --font-size-18: 1.125rem;
    --font-size-16: 1rem;
    --font-size-14: 0.875rem;
    --font-size-12: 0.75rem;
  }

  button {
    height: 60px;
    padding: 0 20px;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;

    font-size: var(--font-size-16px);
    font-weight: 600;

    cursor: pointer;
    transition: 0.4s ease;
  }

  .button-green-small {
    height: 40px;
    background-color: var(--color-primary);
    color: white;
  }

  .button-green-small:hover {
    background-color: var(--color-primary-50);
  }

  input {
    height: 60px;
    padding: 0 10px 0 20px;
    border: 2px solid var(--color-gray-20);
    border-radius: 8px;
    outline: none;

    font-size: var(--font-size-16px);
    font-weight: 400;

    transition: 0.4s ease;
  }
  
    input::placeholder{
      color: var(--color-gray-20);
    }

  input:focus{
    border: 2px solid var(--color-gray-100);
  }

  input:focus::placeholder{
    color: var(--color-gray-50);
  }

  @media (prefers-color-scheme: dark){
      :root{
          --color-grey-100: #F5F5F5;
          --color-grey-0: #333333;
          --color-background: black;
      }  
  }
`;

export default Global;
