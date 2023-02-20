import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'
import {Contexto} from '../App';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Grafica',
      },
    },
  };




function Grafica() {

    const {datos} = useContext(Contexto);
    let fechaActual = new Date();
    let datosGrafica = datos.filter((dato) => dato.Imc !== undefined && dato.dateValue.getDate() > fechaActual.getDate() - 7);
    let labels = datosGrafica.map((dato) => dato.dateValue);
    labels = labels.map((dato) => dato.getDate()+ '/' + dato.getMonth() + '/' + dato.getFullYear());
    let arrayDatos = datosGrafica.map((dato) => dato.Imc);


    const data = {
      labels,
      datasets: [
        {
          label: 'IMC',
          data: arrayDatos,
          borderColor: 'rgb(0, 50, 214)',
          backgroundColor: 'rgba(0, 200, 214, 0.5)',
        },
      ],
    };

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
  }
  
  export default Grafica;