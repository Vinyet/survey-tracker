import styled from 'styled-components';

const SearchBarCourseStyle = styled.div `
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }
  label {
    font-weight: 00;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }
  .input-group {
    display: flex;
    align-items: center;
    input {
      flex: 1;
      padding: 0.6rem 0.6rem;
      font-size: 12px;
      width: 800px;
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
      padding: 0.6rem 1rem;
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

export default SearchBarCourseStyle; 