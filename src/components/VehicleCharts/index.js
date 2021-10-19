import Chart from "react-apexcharts";
import './style.css'

const VehicleCharts = () => (
  <div>
    <h2 className="chart-title">Utilização de Fertilizante</h2>
    <div>
      <Chart
        options={{
          markers: {
            size: 4,
          },
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        }}
        series={[
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]}
        type="line"
        width="80%"
      />
    </div>
    <h2 className="chart-title">Utilização de Bateria</h2>
    <div>
      <Chart
        options={{
          markers: {
            size: 4,
          },
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        }}
        series={[
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]}
        type="line"
        width="80%"
      />
    </div>
  </div>
)

export default VehicleCharts