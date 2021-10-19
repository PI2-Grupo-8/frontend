
import { BsGear, BsVolumeUp } from "react-icons/bs";
import Battery from '../../components/Battery';
import Fertilizer from '../../components/Fertilizer';
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from 'react-router-dom';

import './style.css'

const VehicleHeaderInfo = ({battery, fertilizer, vehicleID, sendSoundAlert}) => {
  const history = useHistory();

  return (
    <div className="header-container">
      <div>
        <IconButton onClick={() => history.push(`/vehicle/edit/${vehicleID}`)} >
          <BsGear className="header-icon" />
        </IconButton>
        <IconButton onClick={sendSoundAlert}>
          <BsVolumeUp className="header-icon" />
        </IconButton>
      </div>
      <div>
        <span>{fertilizer}%</span>
        <Fertilizer className="fertilizer-icon" percentage={fertilizer} />
        <span>{battery}%</span>
        <Battery size={30} className="battery-icon" percentage={battery} />
      </div>
    </div>
  )
}

export default VehicleHeaderInfo

