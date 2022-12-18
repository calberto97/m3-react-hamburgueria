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

  button {
    position: absolute;
    right: 10px;
  }

  div > div {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  span {
    svg:first-child {
      display: none;
    }

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
        top: -20px;
      }
    }
  }

  @media (max-width: 820px) {
    div {
      padding-top: 14px;
      padding-bottom: 14px;
    }

    form {
      width: 100%;
      display: none;

      input {
        width: 100%;
        /* display: none; */
      }

      button {
        /* background-color: transparent;
        padding: 0;
        position: absolute;
        right: -10px; */

        svg {
          /* color: #bdbdbd;
          font-size: 25px; */
        }
      }
    }

    span {
      display: flex;
      /* align-items: center; */

      svg:first-child {
        /* color: red; */
        display: inline-block;
        margin-right: 20px;
        font-size: 25px;
        margin-top: 2px;
      }

      small > p {
        top: -7px;
      }

      > svg {
        margin-left: 20px;
      }
    }

    .show {
      display: inline-block;
      width: 100%;

      button {
        top: 10px;
      }
    }

  }

  @media (max-width: 400px) {
    h2 {
      font-size: var(--font-size-18);
    }

    svg {
      font-size: 20px !important;
    }

    span {
      /* align-items: center; */
    }

    span > svg {
      /* font-size: 24px !important; */
    }

    span > small > p {
      font-size: 10px;
      padding: 1px 3px;
      top: -5px;
      right: -5px;
    }
  }
`;

export default StyledHeader;
