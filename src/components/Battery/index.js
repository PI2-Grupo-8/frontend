import {
  FaBatteryEmpty,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaBatteryThreeQuarters
} from "react-icons/fa";

const Battery = ({ percentage, size = 20, ...rest }) => {
  if (percentage < 25)
    return <FaBatteryEmpty size={size} {...rest} />
  if (percentage < 50)
    return <FaBatteryQuarter size={size} {...rest} />
  if (percentage < 75)
    return <FaBatteryHalf size={size} {...rest} />
  if (percentage < 100)
    return <FaBatteryThreeQuarters size={size} {...rest} />
  else
    return <FaBatteryFull size={size} {...rest} />
}

export default Battery;


