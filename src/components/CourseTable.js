import CourseRow from './CourseRow';
import CourseTableStyle from '../styles/CourseTableStyle';

function CourseTable({ courses }) {
  return (
    <CourseTableStyle>
    <table>
      <thead>
        <tr>
          <th>📋 Código</th>
          <th>📋 Asignatura</th>
          <th>📋 Presencialidad</th>
          <th>📅 Lanzamiento Encuesta</th>
          <th>📊 Recoger Resultados</th>
          <th>📋 Estado</th>
          <th>📈 Aparece en Power BI</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, idx) => (
          <CourseRow key={idx} course={course} />
        ))}
      </tbody>
    </table>
    </CourseTableStyle>
  );
}

export default CourseTable;