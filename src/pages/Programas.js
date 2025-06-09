import React, { useEffect, useState } from 'react';
import ProgramasStyle from '../styles/ProgramasStyle';
import CodeTable from '../components/CodeTable';
import encuestas2410 from '../data/encuestas2410.json';
import { ClipLoader } from "react-spinners";

const Programas = () => {
  const [programs, setPrograms] = useState([]);
  const [presencialidadFilter, setPresencialidadFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    const uniqueProgramsMap = new Map();

    encuestas2410.forEach(item => {
    const codigo = item['Código'];
    if (!uniqueProgramsMap.has(codigo)) {
        uniqueProgramsMap.set(codigo, {
        'Código': codigo,
        'Denominación comercial EAE': item['Denominación comercial EAE'],
        'Titulación Formal Universidad Partner': item['Titulación Formal Universidad Partner'],
        'Presencialidad': item['Presencialidad']
        });
    }
    });

    const uniquePrograms = Array.from(uniqueProgramsMap.values());
    uniquePrograms.sort((a, b) => a['Código'] - b['Código']);

    setPrograms(uniquePrograms);
    setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const filteredPrograms = presencialidadFilter
    ? programs.filter(p => p['Presencialidad'] === presencialidadFilter)
    : programs;

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <ClipLoader color="#ee3727" size={80} />
      </div>
    );
  }

  return (
    <ProgramasStyle>
      <>
        <div className="programs-header">
          <h3>Programas</h3>
          <div className="programs-filter">
            <label>Filtrar por presencialidad:&nbsp;</label>
            <select value={presencialidadFilter} onChange={e => setPresencialidadFilter(e.target.value)}>
              <option value="">Todas</option>
              <option value="FT">FT</option>
              <option value="PT">PT</option>
              <option value="HL">HL</option>
            </select>
          </div>
        </div>
        <CodeTable programs={filteredPrograms} />
      </>
    </ProgramasStyle>
  );
}

export default Programas;
