import React from 'react';
import { BsFillGearFill, BsFillVolumeUpFill, BsPower } from "react-icons/bs";
import Chart from "react-apexcharts";

const Card = () => (
    <>
        <div style={{ margin: 5, borderColor: '#5603AD', borderStyle: 'solid', borderRadius: 10, borderWidth: 1, display: 'flex', justifyContent: 'space-between', padding: 10, width: '80%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#5FAD56', height: 20, width: 20, borderRadius: 50, marginRight: 10 }} />
                <div>
                    <h1 style={{ margin: 5, fontWeight: 'initial', color: '#5603AD' }}>Nome</h1>
                    <h3 style={{ margin: 5, fontWeight: 'initial', color: '#5603AD' }}>Descrição do veiculo</h3>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
                <BsPower style={{ fontSize: 45, color: '#5603AD', fontWeight: 'bold' }} />
            </div>
        </div>
    </>
)

const ControlPanel = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div>
                <div>
                    <BsFillGearFill />
                    <BsFillVolumeUpFill />
                </div>
            </div>
            <Card />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h3 style={{ fontWeight: 'normal', color: '#5603AD' }}>Ultima distância percorrida: 1km</h3>
                <h3 style={{ fontWeight: 'normal', color: '#5603AD' }}>Ultima atualização: Hoje ás 06:49</h3>

                <div style={{ backgroundColor: '#5603AD', width: "100%", height: 1 }} />

                <h2 style={{ fontWeight: 'normal', color: '#5603AD' }} >Fertilizante: Exemplo</h2>
                <h3 style={{ fontWeight: 'normal', color: '#5603AD' }} >Quantidade de uso por planta: 10ml</h3>
                <h2 style={{ fontWeight: 'normal', color: '#5603AD' }} >Utilização de Fertilizante</h2>
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
                        width="100%"
                    />
                </div>
                <h2 style={{ fontWeight: 'normal', color: '#5603AD' }} >Utilização de Bateria</h2>
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
                        width="100%"
                    />
                </div>
            </div>
        </div>
    );
}

export default ControlPanel;