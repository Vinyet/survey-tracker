import styled from 'styled-components';

const ProgramasStyle = styled.div`
    .programs-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
    }
    h3 {
        font-size: 1.5em;
        margin: 0;
    }
    .programs-filter {
        display: flex;
        align-items: center;
        label {
            font-weight: 400;
            margin-right: 5px;
            font-size: 0.9em;
        }
        select {
            padding: 5px 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 0.8em;
        }
    }
`;

export default ProgramasStyle;