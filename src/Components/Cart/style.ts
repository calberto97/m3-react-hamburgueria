import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: var(--color-gray-0);
  width: 100%;
  height: 100%;
  max-height: 500px;
  border-radius: 5px;
  /* overflow-y: scroll; */
  overflow: hidden;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  hr {
    margin: 0 auto;
    width: 92%;
    margin: 0 4%;
    text-align: center;
    background-color: var(--color-gray-20);
    height: 2px;
    border: none;
  }

  ul {
    overflow-y: scroll;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--color-gray-50);

    h2 {
      color: #1b1b1b !important;
    }

    p {
      color: #1b1b1b !important;
    }

    section span > p + p {
      color: var(--color-gray-100) !important;
    }

    section > button:hover {
      background-color: #1b1b1b !important;
      color: var(--color-gray-20) !important;
    }
  }

  > div:first-child {
    background-color: var(--color-primary);
    padding: 20px 22px 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 14px;
      color: #ffffff80;

      cursor: pointer;
    }
  }

  .not-empty {
    justify-content: space-between !important;
    min-height: 220px;
  }

  > div + div {
    margin: 0 auto;
    width: 100%;
    text-align: center;

    h2 {
      margin-top: 60px;
      color: var(--color-gray-100);
      margin-bottom: 20px;
    }

    p {
      font-size: var(--font-size-14);
      color: var(--color-gray-50);
      text-align: center;
      margin-bottom: 60px;
    }
  }

  h2 {
    font-size: var(--font-size-18);
    font-weight: 700;
    color: white;
  }

  section {
    width: 100%;
    padding: 14px 22px;
    bottom: 0;
  }

  section > span {
    display: flex;
    justify-content: space-between;
  }

  section span > p {
    font-size: var(--font-size-14);
    font-weight: 600;
    color: var(--color-gray-100);
  }

  section span > p + p {
    color: var(--color-gray-50);
  }

  section > button {
    margin: 22px 0 0;
    width: 100%;

    color: var(--color-gray-50);
  }

  section > button:hover {
    background-color: var(--color-gray-50);
    color: var(--color-gray-20);
  }
`;

export default StyledDiv