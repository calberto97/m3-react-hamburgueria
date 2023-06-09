import styled from "styled-components";

const StyledLi = styled.li`
  width: 100%;
  height: 80px;
  padding: 22px;
  margin: 20px 0;
  
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    
    height: 100%;
  }

  @media (prefers-color-scheme: dark) {
    img {
      background-color: var(--color-gray-100) !important;
    }

    svg {
      color: var(--color-gray-20) !important;
    }

    span h4 {
      color: #1b1b1b;
    }

    background-color: var(--color-gray-50);
  }

  figure {
    width: 80px;
    height: 80px;
  }

  img {
    padding: 5px;
    width: 100%;
    background-color: var(--color-gray-20);
    border-radius: 5px;
  }

  span {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
  }

  span h4 {
    font-size: var(--font-size-14);
  }

  svg {
    font-size: 14px;
    color: var(--color-gray-50);
    cursor: pointer;
  }

  > small {
    font-weight: 500;
    cursor: pointer;
  }
`;

export default StyledLi;
