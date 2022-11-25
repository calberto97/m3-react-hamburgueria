import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;

  div {
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

export default StyledHeader