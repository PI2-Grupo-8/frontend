import {
  FaBatteryEmpty,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaBatteryThreeQuarters
} from "react-icons/fa";
import { green, red } from '../../constants/colors';

const Battery = ({ percentage, size = 20, ...rest }) => {
  if (percentage < 25)
    return <FaBatteryEmpty color={red} size={size} {...rest} />
  if (percentage < 50)
    return <FaBatteryQuarter color={green} size={size} {...rest} />
  if (percentage < 75)
    return <FaBatteryHalf color={green} size={size} {...rest} />
  if (percentage < 100)
    return <FaBatteryThreeQuarters color={green} size={size} {...rest} />
  else
    return <FaBatteryFull color={green} size={size} {...rest} />
}

export default Battery;


