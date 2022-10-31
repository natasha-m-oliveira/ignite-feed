import "./global.css";

import { Header } from "./components/Header";
import { Content, Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { posts } from "./utils/posts";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { useRef } from "react";

function App() {
  const modalRef = useRef<HTMLDialogElement>(null);
  console.log("oi");

  function handleHideModal(accept: boolean) {
    const returnValue = accept ? "accept" : undefined;
    console.log(returnValue);
    modalRef.current?.close(returnValue);
  }

  function onShowModal() {
    modalRef.current?.showModal();
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content as Content[]}
              publishedAt={post.publishedAt}
              modalRef={modalRef}
              onShowModal={onShowModal}
            />
          ))}
        </main>
      </div>

      <Modal.Root ref={modalRef}>
        <Modal.Header>Excluir comentário</Modal.Header>
        <Modal.Body>
          Você tem certeza que gostaria de excluir este comentário?
        </Modal.Body>
        <Modal.Footer>
          <Button text>Cancelar</Button>
          <Button color="danger">Sim, excluir</Button>
        </Modal.Footer>
      </Modal.Root>
    </div>
  );
}

export default App;
