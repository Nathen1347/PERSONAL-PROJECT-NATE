import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const IncomeChart = () => {
  const [chartData, setChartData] = useState({});
  const [userIncome, setUserIncome] = useState([]);

  const Chart = () => {

    let useIncome = [];

    axios.get('/api/income')
    .then(res=>{
      console.log(res);
      for(const dataObj of res.data){
        useIncome.push(parseInt(dataObj.income_amount));
      }
      setChartData({
        labels: ["Jan", "Feb", "March", "April"],
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
    .catch(err=>{
      console.log(err)
    })
  };

  useEffect(() => {
    Chart();
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: { text: "Monthly Income", display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};
export default IncomeChart;
