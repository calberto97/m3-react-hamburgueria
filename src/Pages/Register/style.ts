import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  gap: 140px;
  justify-content: center;
  height: 100vh;

  button {
    text-transform: none;
    font-size: var(--font-size-16);
    font-weight: 600;
  }

  .right {
    width: 500px;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 26px;

    padding: 30px 24px;
    border: 2px solid var(--color-gray-0);
    border-radius: 5px;

    > span {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > a {
        font-size: var(--font-size-14);
        color: var(--color-gray-50);
        text-decoration: underline;
        cursor: pointer;
      }
    }
    > form {
      display: flex;
      flex-direction: column;
      gap: 26px;
    }
  }

  .left {
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
    gap: 14px;
    height: auto;

    .left {
      width: 100%;
      max-width: 500px !important;
      margin-top: 40px;
      gap: 16px;
    }

    .right {
      max-width: 100% !important;
      margin-bottom: 14px;
    }

    .pattern {
      display: none;
    }
  }
`;

export default StyledMain