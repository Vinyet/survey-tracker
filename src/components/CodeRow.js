import CodeRowStyle from '../styles/CodeRowStyle';

function CodeRow({ programs }) {
  return (
      <CodeRowStyle>
        <td>{programs['Código']}</td>
        <td>{programs['Denominación comercial EAE']}</td>
        <td>{programs['Titulación Formal Universidad Partner']}</td>
        <td>{programs.Presencialidad}</td>
      </CodeRowStyle>
  );
}

export default CodeRow;