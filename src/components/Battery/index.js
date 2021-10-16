import {
  FaBatteryEmpty,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaBatteryThreeQuarters
} from "react-icons/fa";
import { green, red } from '../../constants/colors';

const Battery = ({ percentage }) => {
  if(percentage < 25)
    return <FaBatteryEmpty color={red} size={20} />
  if(percentage < 50)
    return <FaBatteryQuarter color={green} size={20} />
  if(percentage < 75)
    return <FaBatteryHalf color={green} size={20} />
  if(percentage < 100)
    return <FaBatteryThreeQuarters color={green} size={20} />
  else
    return <FaBatteryFull color={green} size={20} />
}

export default Battery;


