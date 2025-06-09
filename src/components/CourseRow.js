import CourseRowStyle from '../styles/CourseRowStyle';


function CourseRow({ course }) {
  return (
    <CourseRowStyle>
      <td title={`Denominación comercial EAE: ${course['Denominación comercial EAE']}\nTitulación Universitaria: ${course['Titulación Formal Universidad Partner']}`}>{course['Código']}</td>
      <td>{course.Asignatura}</td>
      <td>{course.Presencialidad}</td>
      <td>{course['Fecha publicación']}</td>
      <td>{course['Fecha descarga']}</td>
      <td>{course.Estado}</td>
      <td>{course.inPowerBI ? '✅' : '❌'}</td>
    </CourseRowStyle>
  );
}

export default CourseRow;



/*
  OTHER

  Fecha inicio asignatura
  Fecha cierre asignatura
  Convocatoria
  <td>{course.inPowerBI ? '✅' : '❌'}</td> // vendrá de PBI API Rest)

*/