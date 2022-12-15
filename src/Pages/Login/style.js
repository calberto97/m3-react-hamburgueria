import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  div:first-child {
    display: flex;
    flex-direction: column;
    /* gap: 26px; */
    > form {
      display: flex;
      flex-direction: column;
      gap: 26px;
    }
  }
`;

export default StyledMain