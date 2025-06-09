import CodeRow from './CodeRow';
import CodeTableStyle from '../styles/CodeTableStyle';

function CodeTable({ programs }) {
  return (
    <CodeTableStyle>
    <table>
      <thead>
        <tr>
          <th>📋 Código</th>
          <th>📋 Denominación comercial EAE</th>
          <th>📋 Titulación Universitaria Oficial</th>
          <th>📋 Presencialidad</th>
        </tr>
      </thead>
      <tbody>
        {programs.map((program, idx) => (
          <CodeRow key={idx} programs={program} />
        ))}
      </tbody>
    </table>
    </CodeTableStyle>
  );
}

export default CodeTable;