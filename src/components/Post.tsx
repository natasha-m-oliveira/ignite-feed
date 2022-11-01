import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useRef, useState } from "react";

import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { Comment } from "./Comment";
import { Modal } from "./Modal";
import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [comments, setComments] = useState(["Post muito bacana, hein?"]);
  const [commentToDelete, setCommentToDelete] = useState("");
  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments((comments) => [...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) {
    target.setCustomValidity("");
    setNewCommentText(target.value);
  }

  function handleNewCommentInvalid({
    target,
  }: InvalidEvent<HTMLTextAreaElement>) {
    target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleDeleteComment() {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
    modalRef.current?.close();
  }

  function handleHideModal() {
    modalRef.current?.close();
  }

  function conformToDeleteComment(commentToDelete: string) {
    setCommentToDelete(commentToDelete);
    modalRef.current?.showModal();
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedAtDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>
        <footer>
          <Button color="primary" type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </Button>
        </footer>
      </form>

      <div className={styles.commendList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={conformToDeleteComment}
          />
        ))}
      </div>

      <Modal.Root ref={modalRef}>
        <Modal.Header>Excluir comentário</Modal.Header>
        <Modal.Body>
          <p>Você tem certeza que gostaria de</p>
          <p>excluir este comentário?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button text onClick={handleHideModal}>
            Cancelar
          </Button>
          <Button color="danger" onClick={handleDeleteComment}>
            Sim, excluir
          </Button>
        </Modal.Footer>
      </Modal.Root>
    </article>
  );
}
