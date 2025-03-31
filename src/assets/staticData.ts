export const MIN_DESKTOP_WIDTH = 245;
export const MIN_MOBILE_WIDTH = 280;

export const examples = {
  desktopCalendar: `import { useState } from "react";
import { Calendar } from "bme-calendar";
import "bme-calendar/style.css";

function App() {
  const [day, setDay] = useState<string>();

  return (
    <>
      <h2>Календар</h2>
      <Calendar setDay={setDay} />
      <p>Дата: {day}</p>
    </>
  );
}

export default App;
`,

  mobileCalendar: `import { useState } from "react";
import { Calendar } from "bme-calendar";
import "bme-calendar/style.css";

function App() {
  const [day, setDay] = useState<string>();

  return (
    <>
      <h2>Календар</h2>
      <Calendar setDay={setDay} daySize="mobile" />
      <p>Дата: {day}</p>
    </>
  );
}

export default App;
`,

  desktopRange: `import { useState } from "react";
import { Calendar } from "bme-calendar";
import "bme-calendar/style.css";

function App() {
  const [range, setRange] = useState<string[]>();

  return (
    <>
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

export default App;`,

  mobileRange: `import { useState } from "react";
import { Calendar } from "bme-calendar";
import "bme-calendar/style.css";

function App() {
  const [range, setRange] = useState<string[]>();

  return (
    <>
      <h2>Діапазон дат</h2>
      <Calendar
        type="range"
        setRange={setRange}
        range={range}
        daySize="mobile" />
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

export default App;`,
};
