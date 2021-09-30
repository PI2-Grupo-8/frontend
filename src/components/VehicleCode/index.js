import './style.css'

const VehicleCode = ({ code }) => (
  <div className="show-code">
    <p className="code-title">Código do Produto:</p>
    <p className="code">{code?.split("").join(" ")}</p>
  </div>
)

export default VehicleCode;


