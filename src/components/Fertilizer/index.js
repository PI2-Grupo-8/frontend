import { ReactComponent as FertilizerEmpty }  from "../../assets/icons/fertilizer/fertilizer_empty.svg";
import { ReactComponent as FertilizerQuarter } from "../../assets/icons/fertilizer/fertilizer_quarter.svg";
import { ReactComponent as FertilizerHalf } from "../../assets/icons/fertilizer/fertilizer_half.svg";
import { ReactComponent as FertilizerThreeQuarters } from "../../assets/icons/fertilizer/fertilizer_three_quarters.svg";
import { ReactComponent as FertilizerFull } from "../../assets/icons/fertilizer/fertilizer_full.svg";

const Fertilizer = ({ percentage, width = 20 }) => {
  if (percentage < 25)
    return <FertilizerEmpty width={width}/>
  if (percentage < 50)
    return <FertilizerQuarter width={width} />
  if (percentage < 75)
    return <FertilizerHalf width={width} />
  if (percentage < 100)
    return <FertilizerThreeQuarters width={width} />
  else
    return <FertilizerFull width={width} />
}

export default Fertilizer;




