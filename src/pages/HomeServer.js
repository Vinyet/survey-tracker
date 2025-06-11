import { useState, useEffect } from 'react';
import HomeStyle from '../styles/HomeStyle';
import SearchBarCode from '../components/SearchBarCode';
import SearchBarCourse from '../components/SearchBarCourse';
import CourseTable from '../components/CourseTable';
import { ClipLoader } from "react-spinners";
import fetchExcel from '../data/source';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [searchCode, setSearchCode] = useState('');
  const [searchCourse, setSearchCourse] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchExcel();
        const sortedCourses = [...data].sort((a, b) =>
          a.Asignatura.localeCompare(b.Asignatura)
        );
        setCourses(sortedCourses);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar las encuestas:', error);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleCodeSearch = (term) => {
    setSearchCode(term);
  };

  const handleCourseSearch = (term) => {
    setSearchCourse(term.toLowerCase());
  };

  const filteredCourses = courses.filter(course =>
    String(course['Código']).includes(searchCode) &&
    course.Asignatura.toLowerCase().includes(searchCourse)
  );

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <ClipLoader color="#ee3727" size={80} />
      </div>
    );
  }

  return (
    <HomeStyle>
      <div className="search-bar-container">
        <SearchBarCode onSearch={handleCodeSearch} />
        <SearchBarCourse onSearch={handleCourseSearch} />
      </div>
      <CourseTable courses={filteredCourses} />
    </HomeStyle>
  );
};

export default Home;