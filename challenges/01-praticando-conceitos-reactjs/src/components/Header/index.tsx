import logoTodo from "../../assets/logo-todo.svg";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoTodo} />
    </header>
  );
}
