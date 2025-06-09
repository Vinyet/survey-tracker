import { useState, useEffect } from 'react';
import HomeStyle from '../styles/HomeStyle';
import SearchBarCode from '../components/SearchBarCode';
import SearchBarCourse from '../components/SearchBarCourse';
import CourseTable from '../components/CourseTable';
import encuestas2410 from '../data/encuestas2410.json';
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [searchCode, setSearchCode] = useState('');
  const [searchCourse, setSearchCourse] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sortedCourses = [...encuestas2410].sort((a, b) =>
      a.Asignatura.localeCompare(b.Asignatura)
    );

    const timer = setTimeout(() => {
      setCourses(sortedCourses);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
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