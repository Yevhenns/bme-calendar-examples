import { useState } from "react";
import { Calendar } from "bme-calendar";
import "bme-calendar/style.css";
import "./App.css";

function App() {
  const [day, setDay] = useState<string>();
  const [range, setRange] = useState<string[]>();
  const [day1, setDay1] = useState<string>();
  const [range1, setRange1] = useState<string[]>();

  return (
    <>
      <h2>Розмір 24х24px</h2>
      <h2>Календар</h2>
      <div style={{ width: "300px" }}>
        <Calendar setDay={setDay} />
      </div>
      <p>Дата: {day}</p>
      <h2>Діапазон дат</h2>
      <Calendar type="range" setRange={setRange} range={range} />
      <div>
        <p>Список дат:</p>
        <ul>
          {range?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <h2>Розмір 40х32px</h2>
      <h2>Календар</h2>
      <Calendar setDay={setDay1} daySize="mobile" />
      <p>Дата: {day1}</p>
      <h2>Діапазон дат</h2>
      <Calendar
        type="range"
        setRange={setRange1}
        range={range1}
        daySize="mobile"
      />
      <div>
        <p>Список дат:</p>
        <ul>
          {range1?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
