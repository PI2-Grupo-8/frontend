import { ReactComponent as FertilizerEmpty }  from "../../assets/icons/fertilizer/fertilizer_empty.svg";
import { ReactComponent as FertilizerQuarter } from "../../assets/icons/fertilizer/fertilizer_quarter.svg";
import { ReactComponent as FertilizerHalf } from "../../assets/icons/fertilizer/fertilizer_half.svg";
import { ReactComponent as FertilizerThreeQuarters } from "../../assets/icons/fertilizer/fertilizer_three_quarters.svg";
import { ReactComponent as FertilizerFull } from "../../assets/icons/fertilizer/fertilizer_full.svg";

const Fertilizer = ({ percentage }) => {
  if (percentage < 25)
    return <FertilizerEmpty width={20}/>
  if (percentage < 50)
    return <FertilizerQuarter width={20} />
  if (percentage < 75)
    return <FertilizerHalf width={20} />
  if (percentage < 100)
    return <FertilizerThreeQuarters width={20} />
  else
    return <FertilizerFull width={20} />
}

export default Fertilizer;




