import css from "./CodeWrapper.module.css";

type CodeWrapperProps = {
  children: string;
};

export function CodeWrapper({ children }: CodeWrapperProps) {
  return (
    <>
      <h3>Приклад використання</h3>
      <pre className={css.wrapper}>
        <code>{children}</code>
      </pre>
    </>
  );
}
