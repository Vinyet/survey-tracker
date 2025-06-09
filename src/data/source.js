import * as XLSX from 'xlsx';

const EXCEL_URL = 'http://localhost:5000/excel';

const fetchExcel = async () => {
  try {
    const response = await fetch(EXCEL_URL);
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    return jsonData;
  } catch (error) {
    console.error('Error al obtener los datos del Excel:', error);
    throw error;
  }
};

export default fetchExcel;
