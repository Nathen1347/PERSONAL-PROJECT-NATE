import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const ExpenseChart = () => {
  const [chartData, setChartData] = useState(null);

  const chart = () => {
    let useExpense = [];
    let useCategory = [];
    axios
      .get("/api/budget")
      .then((res) => {
        console.log(res);

        const userExp = {}
        for (const exp of res.data){
          if(userExp[exp.category]){
            userExp[exp.category] += +exp.expense_amount;
          }else{
            userExp[exp.category] = + exp.expense_amount;
          }
        }

        Object.keys(userExp).forEach((exp)=>{
          useExpense.push(userExp[exp]);
          useCategory.push(exp)
        })
        

        console.log(res.data)
        setChartData({
          labels: useCategory,
          datasets: [
            {
              label: "Monthly Expenses in $",
              data: useExpense,
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
      <Pie
        data={chartData}
        height={500}
        width={500}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: { text: "Monthly Expenses", display: true },
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
    
  ) : <div>loading</div>
};
export default ExpenseChart;