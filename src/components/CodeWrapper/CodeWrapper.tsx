import { toast } from "react-toastify";
import css from "./CodeWrapper.module.css";

type CodeWrapperProps = {
  children: string;
};

export function CodeWrapper({ children }: CodeWrapperProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      return toast.success("Код скопійовано");
    } catch (err) {
      console.log(err);
      return toast.error("Не вдалося скопіювати код");
    }
  };

  return (
    <>
      <h3>Приклад використання</h3>
      <pre className={css.wrapper}>
        <button
          className={css.button}
          onClick={handleCopy}
          aria-label="copy button"
        >
          <img
            src="/copy.svg"
            width={24}
            height={24}
            alt="copy image"
            loading="lazy"
          />
        </button>
        <code className={css.code}>{children}</code>
      </pre>
    </>
  );
}
