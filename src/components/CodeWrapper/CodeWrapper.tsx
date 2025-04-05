import { toast } from "react-toastify";
import css from "./CodeWrapper.module.css";
import { Copy } from "../icons/Copy";

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
          <Copy />
        </button>
        <code className={css.code}>{children}</code>
      </pre>
    </>
  );
}
