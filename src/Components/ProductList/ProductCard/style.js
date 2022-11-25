import styled from "styled-components";

const StyledLi = styled.li`
  /* width: 100%; */
  /* width: 280px; */
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid var(--color-gray-20);
  border-radius: 5px;

  div {
    background-color: var(--color-gray-0);
    width: 100%;
    height: 150px;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 180px;
    padding-bottom: 20px;
  }

  section {
    padding: 0 20px 20px;
    margin-top: -20px;
    height: 160px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  section > h4 {
    font-size: var(--font-size-18);
    font-weight: 700;
    color: var(--color-gray-100);
  }

  section > small {
    font-size: var(--font-size-12);
    color: var(--color-gray-50);
  }

  section > p {
    font-size: var(--font-size-14);
    font-weight: 600;
    color: var(--color-primary);

    margin-top: 10px;
  }

  button {
    align-self: start;
    font-size: 14px;
  }

  @media (max-width:950px){
    button {
      width: 100%;
    }
  }
`;

export default StyledLi;
