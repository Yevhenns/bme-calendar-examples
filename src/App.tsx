import { useState } from "react";
import { Calendar } from "bme-calendar";
import "bme-calendar/style.css";
import "./App.css";

function App() {
  const [day, setDay] = useState<string>();
  const [range, setRange] = useState<string[]>();

  return (
    <>
      <h2>Календар</h2>
      <Calendar setDay={setDay} />
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
    </>
  );
}

export default App;
