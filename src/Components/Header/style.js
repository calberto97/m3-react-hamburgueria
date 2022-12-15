import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  display: flex;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    --color-gray-0: #1b1b1b;
    h2 {
      color: white;
    }

    input {
      background-color: var(--color-background) !important;
      border: 2px solid var(--color-gray-0);
      color: white;
    }
  }

  && > div {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: var(--font-size-26);
  }

  small {
    color: crimson;
    font-size: var(--font-size-18);
  }

  form {
    position: relative;
    display: flex;
    align-items: center;
  }

  input {
    width: 365px;
    height: 60px;
    padding: 0 10px;

    background-color: white;
  }

  div > div {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  span {
    svg {
      color: #bdbdbd;
      font-size: 30px;
      cursor: pointer;
    }

    > svg {
      margin-left: 30px;
    }

    > small {
      position: relative;
      height: 100%;
      cursor: pointer;

      > p {
        padding: 3px 5px;
        border-radius: 8px;
        background-color: var(--color-primary);

        font-weight: 700;
        font-size: 14px;
        color: var(--color-gray-0);

        position: absolute;
        right: -8px;
        top: -10px;
      }
    }
  }

  @media (max-width: 700px) {
    div {
      flex-direction: column;
      height: fit-content;
      gap: 14px;
      padding-top: 14px;
      padding-bottom: 14px;
    }

    form {
      width: 100%;
    }
    input {
      width: 100%;
    }
  }

  button {
    position: absolute;
    right: 10px;
  }
`;

export default StyledHeader;
