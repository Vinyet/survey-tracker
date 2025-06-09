import styled from 'styled-components';

const SearchBarCodeStyle = styled.div `
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      font-weight: 500;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 0.5rem;
    }
    .input-group {
      display: flex;
      align-items: center;
      width: 300px;
      input {
        flex: 1;
        padding: 0.6rem 0.6rem;
        height: 10px;
        font-size: 12px;
        border: 1px solid #d3d3d3;
        border-radius: ${({ theme }) => theme.colors.borderRadius}
        transition: border-color 0.3s ease;
        &:focus {
          border-color: ${({ theme }) => theme.colors.primary};
          outline: none;
        }
        &::placeholder {
          color: #a9a9a9;
        }
      }
    button {
      padding: 0.45rem 1rem;
      margin-left: 0.5rem;
      font-size: 14px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
      border: none;
      border-radius: ${({ theme }) => theme.colors.borderRadius};
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        color: ${({ theme }) => theme.colors.text};
        border-bottom: 1px solid #ee2737;
      }
  }
}
`;

export default SearchBarCodeStyle; 
