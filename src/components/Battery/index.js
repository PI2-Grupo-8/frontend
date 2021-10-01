import {
  FaBatteryEmpty,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaBatteryThreeQuarters
} from "react-icons/fa";

const Battery = ({ percentage, color }) => {
  if(percentage < 25)
    return <FaBatteryEmpty color={color} size={20} />
  if(percentage < 50)
    return <FaBatteryQuarter color={color} size={20} />
  if(percentage < 75)
    return <FaBatteryHalf color={color} size={20} />
  if(percentage < 100)
    return <FaBatteryThreeQuarters color={color} size={20} />
  else
    return <FaBatteryFull color={color} size={20} />
}

export default Battery;


