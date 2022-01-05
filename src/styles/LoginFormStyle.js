import styled from 'styled-components';

const LoginFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 250px;

    .field-error {
      color: red;
    }
  }
`;

export default LoginFormStyle;