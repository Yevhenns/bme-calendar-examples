import { useState } from "react";
import { Calendar, DaySize } from "bme-calendar";
import { Settings } from "./components/Settings/Settings";
import "bme-calendar/style.css";
import "./App.css";
import { examples, MIN_MOBILE_WIDTH } from "./assets/staticData";
import { CodeWrapper } from "./components/CodeWrapper/CodeWrapper";

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
        <>
          <div style={{ width: containerWidth }}>
            <Calendar setDay={setDay} daySize={daySize} />
            <p style={{ marginTop: "10px" }}>Дата: {day}</p>
          </div>
          {daySize === "desktop" && (
            <CodeWrapper>{examples.desktopCalendar}</CodeWrapper>
          )}
          {daySize === "mobile" && (
            <CodeWrapper>{examples.mobileCalendar}</CodeWrapper>
          )}
        </>
      )}
      {type === "range" && (
        <>
          <div style={{ width: containerWidth }}>
            <Calendar
              type="range"
              setRange={setRange}
              range={range}
              daySize={daySize}
            />
            <p style={{ marginTop: "10px" }}>Список дат:</p>
            <ul>
              {range?.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
          {daySize === "desktop" && (
            <CodeWrapper>{examples.desktopRange}</CodeWrapper>
          )}
          {daySize === "mobile" && (
            <CodeWrapper>{examples.mobileRange}</CodeWrapper>
          )}
        </>
      )}
    </>
  );
}

export default App;
