import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie as PieChart } from "react-chartjs-2";

import { useEffect, useState } from "react";
import { api } from '../../services/api';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Pie2() {
const [cachorros, setCachorros] = useState({
  labels: {},
  datasets: [],
})

  useEffect(()=>{    
    async function fetchData() {
    await api.get("/cachorro/grafico3").then(res => {
        const obj = res.data

        const labels = obj.map(item => item.nome)
        const data = obj.map(item => item.porcentage)

            setCachorros({
              labels: labels,
              datasets:[
                {
                  label:"Cachorros por Nome",
                  data: data,
                  backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
                }
              ]
            }) 
      });
    }

    fetchData()
  },[])
  
  return (
    <div style={{ width: "400px" }}>
      <PieChart data={cachorros} />
    </div>
  );
}
