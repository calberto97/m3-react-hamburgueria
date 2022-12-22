import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  gap: 60px;
  justify-content: center;
  height: 100vh;

  a {
    text-decoration: 100%;
    text-align: center;
    padding: 0 16px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Roboto", "Helvetica", "Arial", sans-serif;

    line-height: 1.75;

    letter-spacing: 0.02857em;

    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;

    color: #fff;
    background-color: #2e7d32;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%),
      0px 1px 5px 0px rgb(0 0 0 / 12%);

    transition: 0.4s ease;
    :hover {
      background-color: #1b5e20;
    }
  }

  button,
  a {
    width: 100%;
    text-transform: none;
    font-size: var(--font-size-16);
    font-weight: 600;
  }

  && > .left {
    width: 500px;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 26px 24px;
    border: 2px solid var(--color-gray-0);
    border-radius: 5px;

    > h4 {
      width: 100%;
      text-align: left;
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 26px;
      width: 100%;
    }

    > small {
      width: 70%;
      text-align: center;
      font-size: var(--font-size-14);
      color: var(--color-gray-50);
    }

    > button {
      width: 100%;
    }
  }

  && > .right {
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 380px;

    .logo {
      width: 70%;
    }

    .message {
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    }

    .pattern {
      width: 55%;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 14px;
    height: auto;

    .right {
      width: 100%;
      max-width: 500px !important;
      margin-top: 40px;
      gap: 16px !important;
    }

    .left {
      max-width: 100% !important;
      margin-bottom: 14px;
    }

    .pattern {
      display: none;
    }
  }

  @media (max-width: 400px) {
    .left > small {
      width: 100% !important;
    }
  }
`;

export default StyledMain;
