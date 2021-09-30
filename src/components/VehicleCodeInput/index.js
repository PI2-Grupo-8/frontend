import './style.css'
import VerificationInput from "react-verification-input";

const VehicleCodeInput = ({value, onChange}) => (
  <div className="code-div">
    <div>
      <p className="code-title">Código do Produto:</p>
      <VerificationInput
        removeDefaultStyles
        classNames={{
          container: "container",
          character: "character",
          characterSelected: "character--selected",
        }}
        length={4}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
)

export default VehicleCodeInput;


