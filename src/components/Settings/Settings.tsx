import { DaySize } from "bme-calendar";
import css from "./Settings.module.css";
import { MIN_DESKTOP_WIDTH, MIN_MOBILE_WIDTH } from "../../assets/staticData";

interface SettingsProps {
  setTypeHandler: () => void;
  type: "calendar" | "range";
  containerWidth: number;
  setContainerWidthHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setDaySizeHandler: () => void;
  daySize: DaySize;
}

export function Settings({
  setTypeHandler,
  type,
  containerWidth,
  setContainerWidthHandler,
  setDaySizeHandler,
  daySize,
}: SettingsProps) {
  return (
    <div className={css.wrapper}>
      <div className={css.btnWrapper}>
        <button onClick={setTypeHandler} className={css.button}>
          Тип:{" "}
          {(type === "calendar" && "Календар") ||
            (type === "range" && "Діапазон дат")}
        </button>

        <button onClick={setDaySizeHandler} className={css.button}>
          Розмір:{" "}
          {(daySize === "desktop" && "24x24px") ||
            (daySize === "mobile" && "40x32px")}
        </button>
      </div>

      <p>Ширина календаря: {containerWidth} px</p>
      <label>
        <input
          className={css.input}
          type="range"
          min={daySize === "mobile" ? MIN_MOBILE_WIDTH : MIN_DESKTOP_WIDTH}
          max={400}
          value={containerWidth}
          onChange={setContainerWidthHandler}
        />
      </label>
    </div>
  );
}
