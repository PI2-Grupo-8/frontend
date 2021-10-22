import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './style.css'
const ToggleGraphPeriod = ({ toggle, onChange }) => {

  const handleChange = (event, newAlignment) => {
    onChange(newAlignment);
  };

  return (
    <div className="toggle-container">
      <ToggleButtonGroup
        value={toggle}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="day" className="toggle-box">Dia</ToggleButton>
        <ToggleButton value="week" className="toggle-box">Semana</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ToggleGraphPeriod

