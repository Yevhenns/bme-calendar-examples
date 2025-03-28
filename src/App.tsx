import { useState } from "react";
import { Calendar, DaySize } from "bme-calendar";
import { Settings } from "./components/Settings/Settings";
import "bme-calendar/style.css";
import "./App.css";
import { MIN_MOBILE_WIDTH } from "./assets/staticData";

function App() {
  const [day, setDay] = useState<string>();
  const [range, setRange] = useState<string[]>();
  const [type, setType] = useState<"calendar" | "range">("calendar");
  const [containerWidth, setContainerWidth] = useState(300);
  const [daySize, setDaySize] = useState<DaySize>("desktop");

  const setTypeHandler = () => {
    if (type === "calendar") setType("range");
    if (type === "range") setType("calendar");
  };

  const setDaySizeHandler = () => {
    if (daySize === "desktop") {
      setDaySize("mobile");
      if (containerWidth < MIN_MOBILE_WIDTH)
        setContainerWidth(MIN_MOBILE_WIDTH);
    }
    if (daySize === "mobile") setDaySize("desktop");
  };

  const setContainerWidthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContainerWidth(+e.target.value);
  };

  return (
    <>
      <Settings
        setTypeHandler={setTypeHandler}
        type={type}
        containerWidth={containerWidth}
        setContainerWidthHandler={setContainerWidthHandler}
        setDaySizeHandler={setDaySizeHandler}
        daySize={daySize}
      />
      {type === "calendar" && (
        <div style={{ width: containerWidth }}>
          <Calendar setDay={setDay} daySize={daySize} />
          <p>Дата: {day}</p>
        </div>
      )}
      {type === "range" && (
        <div style={{ width: containerWidth }}>
          <Calendar
            type="range"
            setRange={setRange}
            range={range}
            daySize={daySize}
          />
          <p>Список дат:</p>
          <ul>
            {range?.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
