import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import DegreesCIcon from "/public/deg_C_icon.png";
import DegreesFIcon from "/public/deg_F_icon.png";

function TemperatureConverter() {
  const [temperatureCelsius, setTemperatureCelsius] = useState('');
  const [temperatureFahrenheit, setTemperatureFahrenheit] = useState('');
  const [degreesCelsius, setDegreesCelsius] = useState(true);

  const calculateTemperature = (e) => {
    e.preventDefault();
    if (degreesCelsius) {
      setTemperatureFahrenheit((Number.parseFloat(temperatureCelsius) * 1.8 + 32).toFixed(2));
    } else {
      setTemperatureCelsius(((Number.parseFloat(temperatureFahrenheit) - 32) / 1.8).toFixed(2));
    }
  };

  return (
    <>
    <h2 className="title">Укажите температуру</h2>
    <div className="temperatureConverter">
      <div className="textField">

        <TextField
          label="по шкале Цельсия"
          variant="outlined"
          fullWidth
          value={temperatureCelsius}
          onChange={(e) => {
            setTemperatureCelsius(e.target.value);
            setDegreesCelsius(true)}
          }
          margin="normal"
        />

        <img src={DegreesCIcon} alt="Celsius" width="32px" />

      </div>
      <div className="textField">

        <TextField
          label="по шкале Фаренгейта"
          variant="outlined"
          fullWidth
          value={temperatureFahrenheit}
          onChange={(e) => {
            setTemperatureFahrenheit(e.target.value);
            setDegreesCelsius(false)}
          }
          margin="normal"
        />

        <img src={DegreesFIcon} alt="Celsius" width="32px" />

      </div>
    </div>
    <div className="button">
      <Button
          variant="contained"
          color="primary"
          onClick={calculateTemperature}
          style={{ marginBottom: 20 }}
        >
          Конвертировать
      </Button>
    </div>
    </>

  );
}

export default TemperatureConverter;