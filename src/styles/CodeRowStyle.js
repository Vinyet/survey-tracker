import styled from 'styled-components';

const CodeRowStyle = styled.tr`
  td {
    font-size: 0.8rem;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #f3f3f3;
  }
  td:nth-child(2),
  td:nth-child(3) {
    text-align: left;
  }
`;

export default CodeRowStyle;