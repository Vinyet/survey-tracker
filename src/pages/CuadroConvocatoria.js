import React, { useEffect, useState } from 'react';
import CuadroConvocatoriaStyle from '../styles/ProgramasStyle';
import { ClipLoader } from "react-spinners";


const CuadroConvocatoria = () => {
    const [presencialidadFilter, setPresencialidadFilter] = useState('');
    
    if (isLoading) {
        return (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
            <ClipLoader color="#ee3727" size={80} />
        </div>
        );
    }

    return (
        <CuadroConvocatoriaStyle>
            <h3>Cuadro de Convocatoria</h3>
            <div className="cuadro-convocatoria-filters">
            <label>Filtrar por presencialidad:</label>
            <select value={presencialidadFilter} onChange={e => setPresencialidadFilter(e.target.value)}>
              <option value="">Todas</option>
              <option value="FT">Full-Time</option>
              <option value="PT">Part-Time</option>
              <option value="HL">Global</option>
            </select>
            </div>
        </CuadroConvocatoriaStyle>
    )
}