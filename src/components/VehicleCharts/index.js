import Chart from "react-apexcharts";
import './style.css'
import moment from 'moment'
import ToggleGraphPeriod from '../../components/ToggleGraphPeriod'

const VehicleCharts = ({ fertilizerGraph, batteryGraph, updateCharts, toggle }) => {
  moment.locale("pt-br");

  const chartOptions = {
    tooltip: {
      x: {
        show: true,
        formatter: function (value) {
          return moment(value).format('DD MMM YYYY h:mm:ss a');
        }
      },
      y: {
        formatter: function (value) {
          return value.toString() + '%';
        }
      }
    },
    markers: {
      size: 4,
    },
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
        style: {
          fontSize: '.8rem'
        }
      }
    }
  }

  return (
    <div className="chart-container">
      <ToggleGraphPeriod toggle={toggle} onChange={updateCharts}/>
      <h2 className="chart-title">Utilização de Fertilizante</h2>
      <div>
        <Chart
          options={chartOptions}
          series={[
            {
              name: "fertilizante",
              data: fertilizerGraph
            }
          ]}
          type="line"
          width="100%"
        />
      </div>
      <h2 className="chart-title">Utilização de Bateria</h2>
      <div>
        <Chart
          options={chartOptions}
          series={[
            {
              name: "bateria",
              data: batteryGraph
            }
          ]}
          type="line"
          width="100%"
        />
      </div>
    </div>
  )
}
export default VehicleCharts