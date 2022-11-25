import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: var(--color-gray-0);
  width: 30%;
  border-radius: 5px;
  overflow: hidden;

  height: fit-content;
  min-height: 220px;
  margin-bottom: 20px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 100%;
  }

  > div:first-child {
    background-color: var(--color-primary);
    padding: 20px 22px 14px;
  }

  > div + div {
    position: absolute;
    top: 50%;
    left: 25%;
    right: 25%;

    h2 {
      color: var(--color-gray-100);
      margin-bottom: 20px;
    }

    p {
      font-size: var(--font-size-14);
      color: var(--color-gray-50);
      text-align: center;
    }
  }

  h2 {
    font-size: var(--font-size-18);
    font-weight: 700;
    color: white;
  }

  section {
    width: 100%;
    padding: 14px 10px;
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