import styled from 'styled-components';

const CourseTableStyle = styled.div`
  margin: 2.5rem 2rem;
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    thead {
      background-color: #f4f4f4;
      th {
        padding: 0.75rem 1rem;
        text-align: center;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
        font-size: 0.90rem;
        color: #333;
        &:nth-child(2),
        &:nth-child(3) {
          text-align: left;
        }
      }
    }
    tbody {
      td {
        font-size: 0.9rem;
        color: #444;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #ddd;
        text-align: center;
      }
    }
  }
`;

export default CourseTableStyle;
