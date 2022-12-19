import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    ::-webkit-scrollbar-track {
      background: var(--color-background);
    }
    
    ::-webkit-scrollbar-thumb {
      border: 3px solid var(--color-background);
    }
  }

  @media (max-width: 1300px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 950px) {
    ul {
      display: flex;
      overflow-x: scroll;
    }

    li {
      flex-shrink: 0;
      width: 300px;
    }
  }

  li {
    justify-self: center;
    align-self: end;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 38px;
  }

  div > h2,
  h2 > small {
    font-size: var(--font-size-26);
    font-weight: 700;
  }

  @media (prefers-color-scheme: dark) {
    div > h2 {
      color: var(--color-gray-20);
    }
  }

  h2 {
    color: var(--color-gray-100);
  }

  h2 > small {
    color: var(--color-gray-50);
  }
`;

export default StyledDiv;
