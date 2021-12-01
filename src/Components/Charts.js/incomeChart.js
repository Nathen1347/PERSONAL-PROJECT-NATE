import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import './chart.css'

const IncomeChart = () => {
  const [chartData, setChartData] = useState(null);

  const chart = () => {
    let useIncome = [];
    let sourceOf = [];
    axios
      .get("/api/income")
      .then((res) => {
        console.log(res);
        for (const income of res.data) {
          useIncome.push(income.income_amount)
          sourceOf.push(income.income_source)
        }
        console.log(res.data)
        setChartData({
          labels: sourceOf,
          datasets: [
            {
              label: "Monthly Income in $",
              data: useIncome,
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
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return chartData ? (
      
    <div>
      <Bar 
        data={chartData}
        height={4000}
        width={5000}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          title: { text: "Monthly Income", display: true, position: "top" },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  color: 'white'
                },
              },
            ],
          },
        }}
      />
    </div> 
    
  ) : <div>loading</div>
};
export default IncomeChart;
