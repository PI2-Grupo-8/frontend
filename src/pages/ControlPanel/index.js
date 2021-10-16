import React from 'react';
import { BsGear, BsVolumeUp, BsPower } from "react-icons/bs";
import { FiRefreshCcw } from 'react-icons/fi';
import Chart from "react-apexcharts";
import Card from '@mui/material/Card';

import './style.css'
import Battery from '../../components/Battery';
import Fertilizer from '../../components/Fertilizer';
import ActiveAlert from '../../components/Alerts/ActiveAlert';
import InactiveAlert from '../../components/Alerts/InactiveAlert';

const DescriptionCard = () => (
    <Card className="card-container">
        <div className="description">
            <div className="vehicle-status" />
            <div className="description-content">
                <h1>Nome</h1>
                <h3>Descrição do veiculo</h3>
            </div>
        </div>
        <BsPower onClick={() => {}} className="on-off-icon" />
    </Card>
)

const Header = () => (
    <div className="header-container">
        <div>
            <BsGear onClick={() => {}} className="header-icon lateral-space" />
            <BsVolumeUp onClick={() => {}} className="header-icon" />
        </div>
        <div>
            <span>100%</span>
            <Battery size={30} color='#5FAD56' className="battery-icon" />
            <span>63%</span>
            <Fertilizer />
        </div>
    </div>
)


const Charts = () => (
    <>
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
    </>
)

const ControlPanel = () => {
    return (
        <div className="vehicle-container">
            <div className="vehicle-info" >
                <Header />
                <DescriptionCard />
                <div className="vehicle-info-container-desktop">
                    <h3 className="vehicle-last-update">Ultima atualização: Hoje ás 06:49 <FiRefreshCcw size={20} color="#5603AD" onClick={() => {}}/></h3>
                    <div className='fuel-level'>
                        <span><Battery size={30} color='#5FAD56' className="battery-icon" /><h4>Bateria: 100%</h4></span>
                        <span><Fertilizer width={30} /><h4>Fertilizante: 60%</h4></span>
                    </div>
                    <h2>Distância</h2>
                    <h3>Ultima distância percorrida: 1km</h3>
                    <br />
                    <h2>Fertilizante: Exemplo</h2>
                    <h3>Quantidade de uso por planta: 10ml</h3>
                </div>
                <div className="vehicle-info-container-mobile">
                    <h3>Ultima distância percorrida: 1km</h3>
                    <h3 className="vehicle-last-update">Ultima atualização: Hoje ás 06:49 <FiRefreshCcw size={20} color="#5603AD" onClick={() => {}}/></h3>
                    <div className="separator" />
                    <h2>Fertilizante: Exemplo</h2>
                    <h3>Quantidade de uso por planta: 10ml</h3>
                </div>
            </div>
            <div className="charts-container">
                <div className="header-desktop">
                    <h4 onClick={() => {}}><BsGear className="header-icon lateral-space" /> Configurações</h4>
                    <h4 onClick={() => {}}><BsVolumeUp className="header-icon" /> Emitir sinal sonoro</h4>
                </div>
                <Charts />
            </div>
            <div className="alerts-container">
                <h2>Alertas</h2>
                <ActiveAlert alert={{
                    type: 'stuck_vehicle',
                    createdAt: new Date()
                }} />
                <ActiveAlert alert={{
                    type: 'stuck_vehicle',
                    createdAt: new Date()
                }} />
                <div className="separator" />
                <h2 className="history">Histórico de Alertas</h2>
                <InactiveAlert alert={{
                    type: 'stuck_vehicle',
                    createdAt: new Date()
                }}/>
                <InactiveAlert alert={{
                    type: 'stuck_vehicle',
                    createdAt: new Date()
                }}/>
            </div>
        </div>
    );
}

export default ControlPanel;