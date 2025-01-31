import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import './Report.css'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function CableNetworkDashboard() {
      // eslint-disable-next-line no-unused-vars
      const [paidData, setPaidData] = useState([200, 1400, 1200]);
      // eslint-disable-next-line no-unused-vars
      const [dueData, setDueData] = useState([30, 0, 0]);

      const labels = ["December", "November", "October"];

      const paidChartData = {
            labels,
            datasets: [
                  {
                        label: "Paid Amount",
                        data: paidData,
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                  },
            ],
      };

      const dueChartData = {
            labels,
            datasets: [
                  {
                        label: "Due Amount",
                        data: dueData,
                        backgroundColor: "rgba(255, 99, 132, 0.6)",
                  },
            ],
      };

      return (
            <div className="report">
            <img className="icon-report" src="Screenshot 2025-01-25 141117.png" alt="profile" />
            <div className="report-background">
                  <div className="chart-container">
                        <h2>Paid Report</h2>
                        <Bar
                              data={paidChartData}
                              options={{
                                    responsive: true,
                                    plugins: {
                                          legend: { display: true, position: "top" },
                                    },
                              }}
                        />
                  </div>
                  <div className="chart-container">
                        <h2>Due Report</h2>
                        <Bar
                              data={dueChartData}
                              options={{
                                    responsive: true,
                                    plugins: {
                                          legend: { display: true, position: "top" },
                                    },
                              }}
                        />
                  </div>
            </div>
            </div>
      );

};

export default CableNetworkDashboard;
