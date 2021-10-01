import * as React from 'react';
import moment from 'moment'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { purple, white, green, yellow } from '../../constants/colors';
import Battery from '../Battery';
import 'moment/locale/pt-br'
import './style.css'

import { BsFillCircleFill } from "react-icons/bs";
import { RiOilFill } from "react-icons/ri";
import { GoAlert } from "react-icons/go";


const VehicleCard = ({ vehicle }) =>  {
  moment.locale("pt-br");

  // TODO: Get alets by vehicle
  // Definições: Ultima atualização é o tempo do ultimo dado de sensor enviado?
  // Como saberemos se o trator está em funcionamento no momento?



  return (
    <Card sx={{ width: 350, margin: 1, background: purple, color: white }}>
      <CardActionArea>
        <CardContent>
          <div className="card-header">
            <div className="card-title">
              <h2 className="vehicle-name">
                {vehicle.name}
              </h2>
              <BsFillCircleFill color={green}/>
            </div>
            <div className="data-icons">
              <div className="info">
                <p className="percentage">75%</p>
                <Battery percentage={75} color={green} />
              </div>
              <div className="info">
                <p className="percentage">100%</p>
                <RiOilFill color={green} size={20} />
              </div>
            </div>
          </div>
          <Typography paragraph color={white}>
            {vehicle.description}
          </Typography>
          <div className="card-footer">
            <Typography variant="subtitle" color={white}>
              Ultima atualização: {moment(vehicle.updatedAt).fromNow()}
            </Typography>
            <GoAlert color={yellow} size={20}/>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VehicleCard;
