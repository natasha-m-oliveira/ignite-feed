import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.slidebar}>
      <img
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/natasha-m-oliveira.png" />

        <strong>Natasha M Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <Button color="primary" outlined asChild>
          <a href="">
            <PencilLine size={20} />
            <p>Editar seu perfil</p>
          </a>
        </Button>
      </footer>
    </aside>
  );
}
