import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  gap: 60px;
  justify-content: center;
  height: 100vh;

  button {
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
